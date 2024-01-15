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
  color: white;
  width: 592px;
  height: 48px;
  & .MuiOutlinedInput-root {
    border: none; /* Remove a borda padrão */

    /* Remove o padding do input outlined */
    & .MuiOutlinedInput-input {
      height: 48px;
      padding: 0;
    }
  }
`;

export const SearchButton = styled(Button)`
  margin-left: 1%;
  background-color: #8c19d2;
  text-transform: none;
  width: 176px;
  height: 48px;
`;

export const HomeBody = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const FormBox = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: stretch;
  color: white;
  width: 700px;
  height: 48px;
`;
