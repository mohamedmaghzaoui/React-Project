// Home.js
import React from "react";
import { ServicesIconsList } from "./Components/ServicesIconsList";
import "./Css/home.css";

import { Footer } from "./Components/Footer";
//card component
import { Cards } from "./Components/Card";
//styles using css modules
import styles from "./Css/home.module.css";

export const Home = () => {
  return (
    //begin home page container
    <div>
      <div id={styles.home} className="  container-fluid    ">
        <br />
        {/* begin row to divide main element*/}
        <div style={{ marginTop: "7%" }} className="row container-fluid">
          {/* first element*/}
          <div className=" px-5 col-8 ">
            <h1 className=" text-light     fw-bold">
              Find the right Freelance
            </h1>
            <h1 className=" text-light  fw-bold">do the right Work</h1>
            <p className="text-light fw-semibold fs-5">
              Work with the best freelance talent from around the world on our
              secure,
              <p> flexible and cost-effective platform.</p>
            </p>
            {/*search from */}
            <div class="row py-2 form-floating">
              <input
                type="text"
                className="form-control not-rounded-right w-75"
              />
              <button className="not-rounded-left col-2 btn btn-success">
                search
              </button>
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
      <div className="  container-fluid    ">
        <h3 style={{ margin: "5%", marginBottom: "2%" }}>
          You need it, we've got it
        </h3>
        <div className="d-flex flex-wrap justify-content-center">
          <ServicesIconsList
            name="Graphics"
            src="https://cdn-icons-png.flaticon.com/512/4091/4091459.png"
            href=""
          />
          <ServicesIconsList
            name="Marketing"
            src="https://cdn-icons-png.flaticon.com/512/3408/3408823.png"
            href=""
          />
          <ServicesIconsList
            name="Translation"
            src="https://cdn-icons-png.flaticon.com/512/2793/2793765.png"
            href=""
          />
          <ServicesIconsList
            name="Video"
            src="https://w7.pngwing.com/pngs/314/584/png-transparent-computer-icons-video-display-resolution-others-angle-text-rectangle-thumbnail.png"
            href=""
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <ServicesIconsList
            name="Programming"
            src="https://p7.hiclipart.com/preview/734/59/634/computer-icons-programmer-computer-programming-source-code-coder.jpg"
            href=""
          />
          <ServicesIconsList
            name="Business"
            src="https://cdn-icons-png.flaticon.com/512/2747/2747468.png"
            href=""
          />
          <ServicesIconsList
            name="Lifestyle"
            src="https://static.thenounproject.com/png/5708815-200.png"
            href=""
          />
          <ServicesIconsList
            name="Photography"
            src="https://www.freeiconspng.com/uploads/photography-icon-png-0.png"
            href=""
          />
        </div>
      </div>
      <div id={styles.footer} className="  container-fluid    ">
        <Footer
          categoryname="Category"
          name1="Graphics"
          name2="Marketing"
          name3="Translation"
          name4="Video"
          name5="Programming"
          name6="Business"
          name7="Lifestyle"
          name8="Photography"
        />
      </div>
    </div>
    //end home page container
  );
};
