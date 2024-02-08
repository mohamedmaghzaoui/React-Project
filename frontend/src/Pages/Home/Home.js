// Home.js
import React from "react";
//card component
import { Cards } from "./Components/Card";
//styles using css modules
import styles from "./Css/home.module.css";
import "./Css/home.css";

export const Home = () => {
  return (
    //begin home page container
    <div id={styles.home} className="container-fluid">
      <br />
      {/* begin row to divide main element*/}
      <div style={{ marginTop: "7%" }} className="row container-fluid">
        {/* first element*/}
        <div className=" px-5 col-8 ">
          <h1 className=" text-light     fw-bold">Find the right Freelance</h1>
          <h1 className=" text-light  fw-bold">do the right Work</h1>
          <p className="text-light fw-semibold fs-5">
            Work with the best freelance talent from around the world on our
            secure,
            <p> flexible and cost-effective platform.</p>
          </p>
          {/*search from */}
          <div class="row py-2 form-floating">
            <input type="text" className="form-control not-rounded-right w-75" />
            <button className="not-rounded-left col-2 btn btn-success">search</button>
          </div>
          {/*cards component */}
          <Cards />
        </div>
        {/*begin second element*/}

        <div className="col ">
          <img
            className="img-fluid "
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt=""
          />
        </div>
        {/* end elements*/}
      </div>{" "}
      {/* n end row to divide main element*/}
    </div>
    //end home page container
  );
};
