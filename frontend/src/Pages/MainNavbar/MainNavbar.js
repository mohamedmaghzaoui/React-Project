import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { FaHome, FaBell, FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function MainNavbar() {
  const [navIcon, setNavIcon] = useState("bars");

  return (
    <div id="navbar" className="position-absolute top-0 start-0 h-100  ">
      <div className="  ">
        {navIcon == "bars" ? (
          <FaBars
            onClick={() => setNavIcon("times")}
            id="show"
            className="my-4  "
            style={{ color: "#D62929", cursor: "pointer" }}
            size={30}
          />
        ) : (
          <FaTimes
            onClick={() => setNavIcon("bars")}
            id="show"
            className="my-4  "
            style={{ color: "#D62929", cursor: "pointer" }}
            size={30}
          />
        )}
      </div>
      <div className="px-2  ">
        <Link className="link d-block text-center" to={"/"}>
          <span className="line py-1 "></span>
          <FaHome className="my-4 " style={{ color: "#D62929" }} size={35} />
        </Link>
      </div>

      <div className="px-2">
        <Link className="link d-block text-center" to={"/Customer"}>
          <span className="line py-1 "></span>
          <FaBriefcase
            className="my-4 "
            style={{ color: "#D62929" }}
            size={35}
          />
        </Link>
      </div>

      <div className="px-2">
        <Link className="link d-block text-center" to={"/"}>
          <span className="line py-1 "></span>
          <FaBell className="my-4 " style={{ color: "#D62929" }} size={35} />
        </Link>
      </div>
    </div>
  );
}

export default MainNavbar;
