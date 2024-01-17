import { Button, TextField, styled, Box } from "@mui/material";

export const HomeHeader = styled(Box)`
  background-color: white;
  min-height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 5%;
  margin-top: 20%;
  flex-direction: column;
`;
export const SearchField = styled(TextField)`
  background-color: white;
  color: black;
  height: 48px;
  padding-bottom: 3%;
  & .MuiOutlinedInput-root {
    border: none;

    & .MuiOutlinedInput-input {
      height: 48px;
      padding: 0;
    }
  }
`;

export const SearchButton = styled(Button)`
  background-color: #8c19d2;
  text-transform: none;
  height: 48px;  
  padding: 3%;
`;

export const HomePage = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const HomeBody = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const FormBox = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: stretch;
  color: black;
  
  
`;
