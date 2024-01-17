import SearchLogo from "../../assets/Search d_evs.svg";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Typography, useMediaQuery } from "@mui/material";
import { fetchGitHubUser } from "../../helpers/Api";
import { useNavigate } from "react-router-dom";
import * as routeNames from "../../routes/routes-path";
import {
  HomeHeader,
  SearchButton,
  SearchField,
  HomeBody,
  FormBox,
  HomePage,
} from "./styles";
import { useRef, useState } from "react";

function Home() {
  const devName = useRef("");
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const data = await fetchGitHubUser(devName.current.value);
      setError(null);
      navigate(`${routeNames.PERFIL}${data.login}`,{ state: { devData: data } });
    } catch (error) {
      console.log(error);
      setError("Dev não encontrado. Por favor, tente novamente.");
    }
  }

  return (
    <HomePage>
      <HomeHeader>
        <img
          src={SearchLogo}
          className="Search-logo"
          alt="logo"
          width={isMobile ? "80%" : "100%"}
        />
      </HomeHeader>
      <HomeBody>
        <FormBox sx={{ flexDirection: isMobile ? "column" : "row" }}>
          <SearchField
            id="SearchDevField"
            placeholder={"Search"}
            variant="outlined"
            inputRef={devName}
            error={Boolean(error)}
            helperText={error}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: isMobile ? "100%" : "592px" }}
          />
          <SearchButton
            type="submit"
            onClick={handleSearch}
            variant="contained"
            sx={{
              width: isMobile ? "100%" : "176px",
              marginLeft: isMobile ? "0" : "3%",
            }}
          >
            <Typography> Search </Typography>
          </SearchButton>
        </FormBox>
      </HomeBody>
    </HomePage>
  );
}

export default Home;
