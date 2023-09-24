import { FC } from "react";
import Header from "../components/header/Header";
import Hubs from "../pages/hubs/Hubs";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Hubs />
    </>
  );
};

export default Layout;
