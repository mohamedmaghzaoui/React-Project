import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { FaHome, FaBell, FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function MainNavbar() {
  //show or hide icon state
  const [navIcon, setNavIcon] = useState("bars");
  //show or hide icon navbar line table of 3 value for the moment
  const [linesOpacities, setLinesOpacities] = useState([1, 0, 0]);

  return (
    //begin navbar
    <div
      id="navbar"
      className="col-xl-1 col-lg-1 col-12"
      style={{ height: "100vh" }}
    >
      {/* first icon*/}
      <div className="icon">
        {navIcon == "bars" ? (
          <FaBars
            onClick={() => setNavIcon("times")}
            id="show"
            className="  "
            style={{ color: "#D62929", cursor: "pointer" }}
            size={30}
          />
        ) : (
          <FaTimes
            onClick={() => setNavIcon("bars")}
            id="hide"
            className=" my-4 "
            style={{ color: "#D62929", cursor: "pointer" }}
            size={30}
          />
        )}
      </div>
      ;{/* second icon*/}
      <div className="px-2 ">
        <Link className="link d-block text-center" to={"/"}>
          {/* dynamic styling*/}
          <span className={`line py-1 opacity-${linesOpacities[0]} `}></span>
          {/*show just one line and hide the others */}
          <FaHome
            className="my-4 "
            style={{ color: "#D62929" }}
            size={35}
            onClick={() => setLinesOpacities([1, 0, 0])}
          />
        </Link>
      </div>
      {/* third icon*/}
      <div className="px-2">
        <Link className="link d-block text-center" to={"/Customer"}>
          <span className={`line py-1 opacity-${linesOpacities[1]} `}></span>
          <FaBriefcase
            className="my-4 "
            style={{ color: "#D62929" }}
            size={35}
            onClick={() => setLinesOpacities([0, 1, 0])}
          />
        </Link>
      </div>
      {/* fourth icon*/}
      <div className="px-2">
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[2]} `}></span>
          <FaBell
            className="my-4 "
            style={{ color: "#D62929" }}
            size={35}
            onClick={() => setLinesOpacities([0, 0, 1])}
          />
        </Link>
      </div>
    </div> //end navbar
  );
}

export default MainNavbar;
