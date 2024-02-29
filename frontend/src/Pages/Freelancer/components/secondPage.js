import {
  MdPersonOutline,
  MdLink,
  MdOutlineBuild,
  MdFace,
} from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import React from "react";

export const SecondPage = (props) => {
  const tips = [
    {
      description:
        "Craft your profile with precision to reflect your professional identity.",
      icon: <MdPersonOutline size={50} />,
    },
    {
      description:
        "Link to your relevant professional networks to add credibility to your profile.",
      icon: <MdLink size={50} />,
    },
    {
      description:
        "Clearly describe your skills to attract more opportunities and showcase your expertise.",
      icon: <MdOutlineBuild size={50} />,
    },
    {
      description:
        "Upload a profile picture that distinctly features your face and adds a personal touch.",
      icon: <MdFace size={50} />,
    },
    {
      description:
        "To maintain a secure community, be prepared to verify your ID if requested.",
      icon: <GrSecure size={50} />,
    },
  ];
  return (
    <div>
      <div className="row h-100">
        <img
          style={{ height: "500px" }}
          className="my-5 mx-5 col-4 img-fluid "
          src="https://assets.entrepreneur.com/content/3x2/2000/1638907778-GettyImages-1125709100.jpg?format=pjeg&auto=webp&crop=16:9"
          alt=""
        />
        <div className="col-7    my-5">
          <h2> what makes a succesfull freelancer profile</h2>
          <p>
            Your first impression matters! Create a profile that will stand out
            from the crowd on FreeEz.
          </p>
          <div className="row my-5 mx-2">
            {tips.map((value) => {
              return (
                <div className="col-4 ">
                  {value.icon}
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => props.setCurrentForm(2)}
            className="btn btn-success btn-lg col-2  "
          >
            Continue
          </button>
          <span
            onClick={() => props.setCurrentForm(0)}
            style={{ cursor: "pointer" }}
            className="text-primary mx-5 fs-5"
          >
            back
          </span>
        </div>
      </div>
    </div>
  );
};
