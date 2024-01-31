// Home.js
import React from "react";

export const Home = () => {
  return (
    <div className="position-relative">
      <img
        className="img-fluid w-100"
        style={{ height: "500px" }}
        src="https://img.batiweb.com/repo-images/article/40626/Embaucher%20un%20freelance%20informatique%20quand%20on%20est%20un%20professionnel%20du%20batiment.jpeg"
        alt=""
      />
      <div
        style={{ left: "10%", top: "5%" }}
        className="position-absolute  translate-middle"
      >
        <input
          id="name"
          type="text"
          placeholder="search "
          name="name"
          class="form-control   fw-bold border-0"
          style={{ background: "#1F2937", width: "140%" }}
        ></input>
      </div>
    </div>
  );
};
