import { Button, TextField, styled, Box } from "@mui/material";

export const Header = styled(Box)`
  background-color: green;
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 1%;
`;

export const SearchField = styled(TextField)`
  background-color: white;
  color: white;
  width: 592px;
  height: 48px;
  & .MuiOutlinedInput-root {
    border: none;

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

export const PerfilBody = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const Body = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftSection = styled(Box)`
  background-color: blue;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
`;

export const RightSection = styled(Box)`
  background-color: red;
  width: 80%;
`;
