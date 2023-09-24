import { styled, AppBar } from "@mui/material";

const AppHeader = styled(AppBar)`
  &.MuiPaper-elevation4 {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow:
      rgba(76, 92, 102, 0.16) 0px 6px 16px -2px,
      rgba(76, 92, 102, 0.2) 0px 0px 8px -4px,
      rgba(76, 92, 102, 0.24) 0px 2px 2px -4px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(255, 255, 255);
  }
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: transparent;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export default AppHeader;
