import React, { useEffect, useState, useRef } from "react";
import { Typography, InputAdornment, Skeleton } from "@mui/material";
import {
  PerfilBody,
  Body,
  Header,
  SearchField,
  LeftSection,
  RightSection,
  PerfilArea,
  AvatarPhoto,
  FirstColumn,
  SecondColumn,
  ContainerPage,
  ContentContainer,
  ButtonSection,
  ContactButton,
  DataSection,
  Logo,
  SearchContainer
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchGitHubUser, fetchGitHubRepos } from "../../helpers/Api";
import * as routeNames from "../../routes/routes-path";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as AppLogo } from "../../assets/Search d_evs.svg";
import RepositoryInfo from "../../components/Perfil/RepositoryInfo";

function Perfil() {
  const devName = useRef("");
  const { state } = useLocation();
  const [devData, setDevData] = useState(state.devData);
  const [repositoriesData, setRepositoriesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleHome = () => {
    navigate(`${routeNames.HOME}`);
  };

  const handleSearch = async (e) => {
    try {
      const data = await fetchGitHubUser(devName.current.value);
      navigate(`${routeNames.PERFIL}${data.login}`, {
        state: { devData: data },
      });
      setDevData(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Dev não encontrado. Por favor, tente novamente.");
    }
  };

  const handleGitRepositories = async () => {
    try {
      const dataRepos = await fetchGitHubRepos(devData.login);
      setRepositoriesData(dataRepos);
      setError(null);
    } catch (error) {
      console.error(error);
    }
  };

  function addProtocol(url) {
    if (/^(f|ht)tps?:\/\//i.test(url)) {
      return url;
    }
    return `http://${url}`;
  }

  useEffect(() => {
    const handlePopState = () => {
      navigate(routeNames.HOME);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  useEffect(() => {
    handleGitRepositories();
  }, [devData]);

  useEffect(() => {
    if (repositoriesData !== null) {
      setLoading(false);
    }
  }, [repositoriesData]);

  return (
    <ContainerPage>
      <Header>
        <Logo>
          <AppLogo
            className="Search-logo"
            alt="logo"
            onClick={handleHome}
            style={{ maxWidth: "30vh" }}
          />
        </Logo>
        <SearchContainer>
          <SearchField
            id="SearchDevField"
            placeholder={devData.login}
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
        </SearchContainer>
      </Header>
      <PerfilBody>
        <Body>
          <ContentContainer>
            <LeftSection>
              <DataSection>
                <PerfilArea>
                  <FirstColumn>
                    <AvatarPhoto
                      alt={state?.login || "Perfil"}
                      src={devData?.avatar_url || ""}
                      sx={{ width: 40, height: 40, bgcolor: "#1976D2" }}
                    />
                  </FirstColumn>
                  <SecondColumn>
                    <Typography variant="h6">{devData.login}</Typography>
                  </SecondColumn>
                </PerfilArea>
                <Typography variant="subtitle2" sx={{ marginBottom: 3 }}>
                  {devData.bio}
                </Typography>
                <Typography variant="subtitle2">
                  {devData.followers !== undefined && (
                    <>
                      <GroupsIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Seguidores: {devData.followers}
                      </span>
                    </>
                  )}
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: 3 }}>
                  {devData.following !== undefined && (
                    <>
                      <FavoriteBorderIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        Seguindo: {devData.following}
                      </span>
                    </>
                  )}
                </Typography>
                <Typography variant="subtitle2">
                  {devData.company && (
                    <>
                      <CorporateFareIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        {devData.company}
                      </span>
                    </>
                  )}
                </Typography>
                <Typography variant="subtitle2">
                  {devData.location && (
                    <>
                      <RoomIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        {devData.location}
                      </span>
                    </>
                  )}
                </Typography>
                <Typography variant="subtitle2">
                  {devData.email && (
                    <>
                      <EmailIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        {devData.email}
                      </span>
                    </>
                  )}
                </Typography>
                <Typography variant="subtitle2">
                  {devData.twitter_username && (
                    <>
                      <TwitterIcon
                        sx={{ verticalAlign: "middle", marginRight: 2 }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        @{devData.twitter_username}
                      </span>
                    </>
                  )}
                </Typography>
              </DataSection>
              {devData.blog ? (
                <ButtonSection>
                  <ContactButton
                    onClick={() =>
                      window.open(addProtocol(devData.blog), "_blank")
                    }
                  >
                    Contato
                  </ContactButton>
                </ButtonSection>
              ) : (
                <></>
              )}
            </LeftSection>

            <RightSection>
              {loading || repositoriesData === null ? (
                <Skeleton variant="rectangular" width={300} height={40} />
              ) : (
                <RepositoryInfo repositories={repositoriesData || []} />
              )}
            </RightSection>
          </ContentContainer>
        </Body>
      </PerfilBody>
    </ContainerPage>
  );
}

export default Perfil;
