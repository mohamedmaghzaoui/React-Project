import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { FaHome, FaBell, FaBriefcase, FaBars, FaTimes,FaHeart,FaPlus } from "react-icons/fa";


function MainNavbar() {
  const [navIcon, setNavIcon] = useState("bars");
  //show or hide icon navbar line
  const [linesOpacities, setLinesOpacities] = useState([1, 0, 0,0,0]);
  //change colors of navbar icon
  const [iconColors, setIconeColors] = useState(["#D62929", "white", "white","white","white"]);

  return (
    //begin navbar
    <div
      id="navbar"
      className="col-xl-1 col-lg-1 col-12 py-4"
      style={{ height: "100vh" }}
    >
      {/* first icon*/}
      <div
        className="px-2 "
        onClick={() => {
          setLinesOpacities([1, 0, 0, 0,0]);
          setIconeColors(["#D62929", "white", "white", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[0]} `}></span>

          <FaHome
            className="my-4 "
            style={{ color: `${iconColors[0]}` }}
            size={35}
          />
        </Link>
      </div>
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 1, 0, 0,0]);
          setIconeColors(["White", "#D62929", "white", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/Customer"}>
          <span className={`line py-1 opacity-${linesOpacities[1]} `}></span>
          <FaBriefcase
            className="my-4 "
            style={{ color: `${iconColors[1]}` }}
            size={35}
          />
        </Link>
      </div>
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 0, 1, 0,0]);
          setIconeColors(["white", "white", "#D62929", "white"]);
        }}
      >
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[2]} `}></span>
          <FaBell
            className="my-4 "
            style={{ color: `${iconColors[2]}` }}
            size={35}
          />
        </Link>
      </div>
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 0, 0, 1,0]);
          setIconeColors(["white", "white", "white", "#D62929"]);
        }}
      >
        <Link className="link d-block text-center" to={"/"}>
          <span className={`line py-1 opacity-${linesOpacities[3]} `}></span>
          <FaHeart
            className="my-4"
            style={{ color: `${iconColors[3]}` }}
            size={35}
          />
        </Link>
      </div>
      <div
        className="px-2"
        onClick={() => {
          setLinesOpacities([0, 0, 0, 0,1]);
          setIconeColors(["white", "white", "white", "#D62929"]);
        }}
      >
        <Link className="link d-block text-center" to={"/Freelancer"}>
          <span className={`line py-1 opacity-${linesOpacities[4]} `}></span>
          <FaPlus className="my-4" style={{ color: `${iconColors[3]}` }} size={35} />
        </Link>
      </div>
    </div> //end navbar
  );
}

export default MainNavbar;
