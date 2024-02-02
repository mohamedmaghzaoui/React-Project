// Home.js
import React from "react";
import { Header } from "./Components/header";
import { Cards } from "./Components/Card";
import { Content } from "./Components/Content";

export const Home = () => {
  return (
    //begin home page
    <div
      style={{ backgroundColor: "black" }}
      className="position-relative container-fluid w-100 p-0 m-0 "
    >
      {/* img*/}
      <img
        className="img-fluid w-100"
        style={{ height: "400px" }}
        src="https://img.batiweb.com/repo-images/article/40626/Embaucher%20un%20freelance%20informatique%20quand%20on%20est%20un%20professionnel%20du%20batiment.jpeg"
        alt=""
      />
      {/*header component */}
      <Header />
      {/* cards component*/}
      <Cards />
      <Content />
    </div> //end home page
  );
};
