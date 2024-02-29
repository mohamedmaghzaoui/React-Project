import { useContext } from "react";
import { UserContext } from "../../Contexts/userContext";

import NewNavbar from "../Navbar/NewNavbar";
import MainNavbar from "./MainNavbar";

export const Navbar = () => {
  const { username, setUsername } = useContext(UserContext);
  {
    return username ? <NewNavbar /> : <MainNavbar />;
  }
};
