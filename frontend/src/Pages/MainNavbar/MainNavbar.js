import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaBell, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import "./MainNavbar.css";

function MainNavbar() {
  const [navIcon, setNavIcon] = useState("bars");
  const [linesOpacities, setLinesOpacities] = useState([1, 0, 0, 0]);
  const [iconColors, setIconeColors] = useState(["#D62929", "white", "white", "white"]);

  return (
    <div id="navbar" className="col-xl-1 col-lg-1 col-12 py-4" style={{ height: "100vh" }}>
      {/* first icon*/}
      <div
        className="px-2 "
        onClick={() => {
          setLinesOpacities([1, 0, 0, 0]);
          setIconeColors(["#D62929", "white", "white", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[0]} `}></span>
          <FaHome className="my-4" style={{ color: `${iconColors[0]}` }} size={35} />
        </Link>
      </div>
      {/* second icon*/}
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 1, 0, 0]);
          setIconeColors(["White", "#D62929", "white", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/Customer"}>
          <span className={`line py-1 opacity-${linesOpacities[1]} `}></span>
          <FaBriefcase className="my-4" style={{ color: `${iconColors[1]}` }} size={35} />
        </Link>
      </div>
      {/* third icon*/}
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 0, 1, 0]);
          setIconeColors(["white", "white", "#D62929", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[2]} `}></span>
          <FaBell className="my-4" style={{ color: `${iconColors[2]}` }} size={35} />
        </Link>
      </div>
      {/* fourth icon (project form) */}
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 0, 0, 1]);
          setIconeColors(["white", "white", "white", "#D62929"]);
        }}
      >
        <Link className="link d-block text-center" to={"/Freelancer"}>
          <span className={`line py-1 opacity-${linesOpacities[3]} `}></span>
          <FaPlus className="my-4" style={{ color: `${iconColors[3]}` }} size={35} />
        </Link>
      </div>
    </div>
  );
}

export default MainNavbar;
