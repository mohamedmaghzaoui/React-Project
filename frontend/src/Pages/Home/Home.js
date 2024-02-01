// Home.js
import React from "react";
import styles from "./Css/home.module.css";
import { FaSearch } from "react-icons/fa";

export const Home = () => {
  return (
    <div className="position-relative ">
      <img
        className="img-fluid w-100"
        style={{ height: "500px" }}
        src="https://img.batiweb.com/repo-images/article/40626/Embaucher%20un%20freelance%20informatique%20quand%20on%20est%20un%20professionnel%20du%20batiment.jpeg"
        alt=""
      />
      <div className="container row ">
        <div
          style={{ left: "22%", top: "8%" }}
          className="position-absolute translate-middle container-fluid col-5 row"
        >
          <div className="col-7 p-0 m-0">
            <input
              id={styles.search}
              type="text"
              placeholder="Rechercher quelque chose"
              name="name"
              className="form-control text-light fw-bold border-0"
            ></input>
          </div>
          <div
            style={{ backgroundColor: "#D62929" }}
            className="col-3  p-0 m-0 rounded-pill "
          >
            <FaSearch
              id={styles.icon}
              className="w-100 my-2  "
              style={{
                cursor: "pointer",
                color: "white",
                // Adjust this value to increase/decrease height
              }}
              size={30}
            />
          </div>
        </div>
        <div
          className="  position-absolute col-xl-8  col-lg-8 "
          style={{ top: "3.5%", left: "40%" }}
        >
          <button
            style={{ color: "#D62929" }}
            className=" col-lg-2 col-1  fw-bold btn btn-light btn-lg  "
          >
            S'identifier
          </button>
          <button className="text-light-emphasis mx-5 fw-bold btn btn-outline-danger btn-lg">
            Creer compte
          </button>
        </div>
      </div>
    </div>
  );
};
