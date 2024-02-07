// Home.js
import React from "react";
import { Header } from "./Components/header";
import { Cards } from "./Components/Card";
import { Content } from "./Components/Content";
import { useState, useEffect } from "react";
import styles from "./Css/home.module.css";

export const Home = () => {
  return (
    //begin home page
    <div id={styles.home} className="  container-fluid    ">
      <br />

      <div style={{ marginTop: "7%" }} className="py-5 px-5  ">
        <h1 className=" text-light     fw-bold">Find the right Freelance</h1>
        <h1 className=" text-light  fw-bold">do the right Work</h1>

        <div class="row input-group-lg">
          <input type="text" className=" form-control w-50" />
          <button class="col-1 btn btn-success">search</button>
        </div>
      </div>
    </div>
  );
};
