import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Skeleton,
  Box,
  InputAdornment,
  Avatar,
} from "@mui/material";
import {
  PerfilBody,
  Body,
  Header,
  SearchField,
  LeftSection,
  RightSection,
} from "./styles";
import { useLocation } from "react-router-dom";
import { fetchGitHubUser } from "../../helpers/Api";
import { useNavigate } from "react-router-dom";
import * as routeNames from "../../routes/routes-path";
import SearchIcon from "@mui/icons-material/Search";
import SearchLogo from "../../assets/Search d_evs.svg";

function Perfil(props) {
  const devName = useRef("");
  const { state } = useLocation();
  const [devData, setDevData] = useState(state.devData);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (devData) {
      setLoading(false);
    }
  }, [state, devData]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  async function handleSearch(e) {
    try {
      const data = await fetchGitHubUser(devName.current.value);
      setError(null);
      navigate(`${routeNames.PERFIL}${data.login}`, {
        state: { devData: data },
      });
    } catch (error) {
      console.log(error);
      setError("Dev não encontrado. Por favor, tente novamente.");
    }
  }

  return (
    <Box>
      <Header>
        <SearchField
          id="SearchDevField"
          placeholder={state.login}
          variant="outlined"
          inputRef={devName}
          error={Boolean(error)}
          helperText={error}
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Header>
      <PerfilBody>
        <Body>
          <LeftSection>
            <Avatar
              alt={state?.login || "Perfil"}
              src={devData?.avatar_url || ""}
              sx={{ width: 70, height: 70, bgcolor: "#1976D2" }}
            >
              {devData?.login}
            </Avatar>
            <Typography variant="h5">{devData.login}</Typography>
            <Typography>{devData.bio}</Typography>
          </LeftSection>
          <RightSection>
            {loading ? (
              <Skeleton variant="rectangular" width={300} height={40} />
            ) : devData ? (
              <Box></Box>
            ) : (
              <Typography>Dev não encontrado.</Typography>
            )}
          </RightSection>
        </Body>
      </PerfilBody>
    </Box>
  );
}

export default Perfil;
