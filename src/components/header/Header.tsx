import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import logo from "../../assets/cleanhub-logo.svg";
import { Logo } from "./Logo.styled";
import { useScrollTrigger } from "@mui/material";
import React from "react";
import AppHeader from "./AppHeader.styled";

type Props = {
  children: React.ReactElement;
};

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header: FC = () => {
  return (
    <>
      <ElevationScroll>
        <AppHeader>
          <Toolbar>
            <Logo src={logo} alt="Clean hub" />
          </Toolbar>
        </AppHeader>
      </ElevationScroll>
    </>
  );
};

export default Header;
