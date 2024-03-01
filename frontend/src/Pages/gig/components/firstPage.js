import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePublish } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";


 export const DescriptionPage = (props) => {
  const Data = [
    {
      title: "tell us about your gig",
      icon: AiOutlineProfile,
      description:
    "Create a Gig of the service you’re offering and start selling instantly."
    },
  
    {
      title: "publish your gig",
      icon: MdOutlinePublish,
      description:
    "Publish your Gig and start selling instantly."
    },
  ];

  return (
    <div className="mx-5 my-5 row">
      <div className="col-7">
        <h3 className="fw-bolder" >Ready to begin your journey?</h3>
        <h3 className="fw-bolder">Tell us about your gigs</h3>
        {Data.map((value, index) => (
          <div key={index}>
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
        ))}
      </div>
      <div className="col-5">
        <video className="img-fluid" controls style={{ width: "100%", height: "auto" }}>
          <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/966b0ae895e85b526600eff1d21e3cf4-1674728725728/Seller%20onboarding%20video%20HQ" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <button
        onClick={() => props.setCurrentForm(1)}
        className="btn btn-success col-1 offset-1"
      >
        Begin
      </button>
    </div>
  );
};
