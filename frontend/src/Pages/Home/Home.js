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
      <div style={{ marginTop: "7%" }} className="row container-fluid">
        <div className="py-5 px-5 col-8 ">
          <h1 className=" text-light     fw-bold">Find the right Freelance</h1>
          <h1 className=" text-light  fw-bold">do the right Work</h1>
          <p className="text-light fw-semibold fs-5">
            Work with the best freelance talent from around the world on our
            secure,
            <p> flexible and cost-effective platform.</p>
          </p>

          <div class="row input-group-lg py-2">
            <input type="text" className=" form-control w-75" />
            <button class="col-2 btn btn-success">search</button>
          </div>
        </div>
        <div className="col">
          <img
            className="img-fluid "
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
