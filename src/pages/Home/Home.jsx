import SearchLogo from "./Search d_evs.svg";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Typography } from "@mui/material";
import { HomeHeader, SearchButton, SearchField, HomeBody, FormBox } from "./styles";

function Home() {
  return (
    <HomeBody>
      <HomeHeader>
        <img src={SearchLogo} className="Search-logo" alt="logo" />
      </HomeHeader>
      <HomeBody>
        <FormBox>
          <SearchField
            placeholder={"Search"}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <SearchButton variant="contained">
            <Typography> Search </Typography>
          </SearchButton>
        </FormBox>
      </HomeBody>
    </HomeBody>
  );
}

export default Home;
