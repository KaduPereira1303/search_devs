import { Button, TextField, styled, Box, Avatar } from "@mui/material";

export const Header = styled(Box)`
  background-color: #fafafa;
  min-height: 10%;
  display: flex;
  align-items: flex-start;
  color: black;
  padding: 2%;
`;

export const ContainerPage = styled(Box)`
  background-color: #fafafa;
  max-height: 80vh;
`;
export const SearchContainer = styled(Box)`
  max-width: 80%;
  margin-left: 5%;
`;

export const SearchField = styled(TextField)`
  background-color: white;
  color: white;
  width: 592px;
  height: 48px;
  margin: 0 auto;
  border-color: #8c19d2;
  align-self: start;
  & .MuiOutlinedInput-root {
    border: none;
    & .MuiOutlinedInput-input {
      height: 48px;
      padding: 0;
    }
  }
`;
export const Logo = styled(Box)`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  margin-bottom: auto;
  margin-left: 10%;
  max-width: 20%;
`;

export const ContactButton = styled(Button)`
  margin-left: 1%;
  background-color: #8c19d2;
  text-transform: none;
  width: 250px;
  height: 48px;
  color: white;
  margin-top: 20px;

  &:hover {
    background-color: #8c19d2;
    color: white;
  }
`;

export const PerfilBody = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  max-height: 87.5vh;
`;

export const Body = styled(Box)`
  background-color: #fafafa;
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  padding: 5%;
  max-height: 90vh;
  overflow-y: auto;
`;
export const ContentContainer = styled(Box)`
  width: 80%;
  display: flex;
  justify-content: center;
  max-height: 90vh;
`;

export const LeftSection = styled(Box)`
  // background-color: white;
  width: 18%;
  max-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 3% 0px  0px;
  margin-right: 2%;
  color: #4a5568;
`;

export const RightSection = styled(Box)`
  flex: 1;
  background-color: white;
  width: 80%;
  padding: 1%;
  max-height: 100%;
  overflow-y: auto;
`;

export const DataSection = styled(Box)`
  background-color: white;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  margin-right: 2%;
  color: #4a5568;
`;
export const ButtonSection = styled(Box)`
  width: 100%;
  margin-top: 10%;
  max-height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const AvatarSection = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AvatarPhoto = styled(Avatar)`
  margin-right: 3px;
`;

export const PerfilArea = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
`;

export const FirstColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 10%;
  align-items: center;
  justify-content: center;
  padding: 3%;
  margin-right: 1%;
`;

export const SecondColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: start;
  justify-content: center;
`;
