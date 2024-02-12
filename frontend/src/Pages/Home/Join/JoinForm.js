//import libraries
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"; //useForm to manages form data
import * as yup from "yup"; //yup library for error validation
import { yupResolver } from "@hookform/resolvers/yup"; //yup resolver to connect between useForm and yup

//style
const JOIN_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px",
  zIndex: "9999",
  textAlign: "center",
  borderRadius: "25px",
  width: "90%", // Ajustement de la largeur
  maxWidth: "1000px", // Ajustement de la largeur maximale
  display: "flex",
};

const IMAGE_STYLE = {
  flex: "1",
  marginRight: "20px",
};

const FORM_STYLE = {
  flex: "1",
};

export default function Join({ openJoin, onCloseJoin }) {
  //state to verify if form is submitted or not and to render error msgs
  const [isSubmitted, setIsSubmitted] = useState(false);
  //user schema for form validation
  const userSchema = yup.object().shape({
    //email validation
    email: yup.string().required("email is required"),
    //password validation
    password: yup
      .string()
      .required("password is required")
      .min(6, "password must be more that 6 letters"),
    //repeated password validation
    repeatedPassword: yup
      .string()
      .required("repeat password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema), //chose userSchema for validation
  }); //use useform library
  const submitData = (data) => {
    console.log(data);
  };
  //formulaire
  const combinedError =
    (isSubmitted ? errors.email?.message : null) ||
    (isSubmitted ? errors.password?.message : null) ||
    (isSubmitted ? errors.repeatedPassword?.message : null);

  const renderForm = (
    <div className="form" style={FORM_STYLE}>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")} //register email in a object using react hook form
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={() => {
              setIsSubmitted(false);
            }}
            style={{
              borderColor: errors.email && "red",
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")} //register password in a object using react hook form
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={() => {
              setIsSubmitted(false);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {" "}
            Repeat Password
          </label>
          <input
            {...register("repeatedPassword")}
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={() => {
              setIsSubmitted(false);
            }}
          />
        </div>
        {combinedError ? (
          <span className="text-danger fw-normal">{combinedError}</span>
        ) : (
          <br />
        )}
        <div className="button-container py-2">
          <button
            onClick={() => setIsSubmitted(true)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  //cheeck wether to show or not the form component

  if (!openJoin) return null;
  return (
    <div style={JOIN_STYLE}>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
        //hide form
        onClick={onCloseJoin}
      >
        &times;
      </button>
      <div style={IMAGE_STYLE}>
        <img
          src="https://imgs.search.brave.com/x6iqbJWLvymDlIcHHDsXqFoo6fP5UH86u2gqwTLL17U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzUzLzM0/LzM2MF9GXzQ2MjUz/MzQxMF9lNXZNRk9t/eEJHRmtCN3dEV1FE/RVd5WVhETnZ2Tndx/bi5qcGc"
          alt="Join Image"
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Join us</div>
      {renderForm}
    </div>
  );
}
