import { AiOutlineProfile } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import React from "react";

import { MdOutlinePublish } from "react-icons/md";
export const InitialPage = () => {
  const Data = [
    {
      title: "make a succesfull profile",
      icon: AiOutlineProfile,
      description:
        "Learn essentials for a compelling profile. Follow do’s and don’ts to ensure a professional online presence.",
    },
    {
      title: "create a seller profile",
      icon: CgProfile,
      description:
        "Add a professional picture, write an engaging description, and provide accurate information to build trust.",
    },
    {
      title: "publish your gig",
      icon: MdOutlinePublish,
      description:
        "Showcase your service through a well-crafted Gig. Start attracting buyers and kickstart your selling journey.",
    },
  ];
  return (
    <div className="mx-5 my-5 row">
      <div className="col-7 ">
        <h3 className="fw-bolder">Ready to begin your journey ?</h3>
        <h3 className="fw-bolder">begin selling in freeez</h3>
        {Data.map((value) => {
          return (
            <div>
              <hr className="w-75" style={{ opacity: "15%" }} />
              <div className="row container-fluid">
                {React.createElement(value.icon, {
                  className: "col-2 my-3",
                  size: 50,
                })}
                <div className="col-7 my-2">
                  <h5>{value.title}</h5>
                  <p className="text-light-emphasis">{value.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
        className="img-fluid col-5"
        src="https://www.germany-visa.org/wp-content/uploads/2019/11/working-freelancer-germany.jpeg"
        alt=""
      />
      <button className="btn btn-success col-1 offset-1">Begin</button>
    </div>
  );
};
