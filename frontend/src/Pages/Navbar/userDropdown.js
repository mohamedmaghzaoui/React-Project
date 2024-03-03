import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Contexts/userContext";

export const UserDropDown = () => {
  const { username, setUsername } = useContext(UserContext);
  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/logout");
    } catch (error) {
      setUsername((prev) => prev + "a"); //symfony will return error when calling this route with axios
    }
  };
  return (
    <ul
      style={{ position: "absolute", left: "-250%" }}
      className="dropdown-menu "
    >
      <li>
        <Link to={"/profile"} className="dropdown-item" href="#">
          Profile
        </Link>
      </li>
      <hr />
      <li>
        <Link to={"/freelancer"} className="dropdown-item" href="#">
          Become a freelancer
        </Link>
        
      </li>
      <hr />
      <li><Link to={"/Gigs"} className="dropdown-item" href="#">
          Gigs
        </Link></li>
        <hr/>
      <li>
        <Link className="dropdown-item" href="#">
          Setting
        </Link>
      </li>
      <hr />
      <li>
        <Link onClick={() => logout()} className="dropdown-item" href="#">
          Logout
        </Link>
      </li>
    </ul>
  );
};
