//import libraries
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"; //useForm to manages form data
import * as yup from "yup"; //yup library for error validation
import { UsernameForm } from "./usernameForm";
import { yupResolver } from "@hookform/resolvers/yup"; //yup resolver to connect between useForm and yup
const FORM_STYLE = {
  flex: "1",
};
export const RegisterForm = (props) => {
  //state to verify if form is submitted or not and to render error msgs
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(null); //state to check if email already exist
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

    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema), //chose userSchema for validation
  }); //use useform library
  //function to submit user data to symfony server
  const submitData = async (userData) => {
    //send data using axois
    try {
      const response = await axios.post(
        "http://localhost:8000/verifyUser", //symfony route for email validation
        userData
      );
      console.log(response);
      window.user = "worked";
      props.setUserData(userData); //set userdata to use it in parent component and then in username component
      props.setForm("username"); //switch to second form
    } catch (error) {
      console.log(error);
      //if error exist and it equal to email not existing then render email error by update the state
      if (error.response && error.response.data[0] === "Email already exists") {
        setEmailError(error.response.data[0]);
      }
    }
  };

  //variable to stock one error of user beginnig with email error -> password error -> repeated pasword error and finaly if email already exist error
  const combinedError =
    (isSubmitted ? errors.email?.message : null) || //email error
    (isSubmitted ? errors.password?.message : null) || //password error
    (isSubmitted ? errors.repeatedPassword?.message : null) || //repeatpassword error
    (isSubmitted ? emailError : null); //email already exist error

  return (
    <div className="form" style={FORM_STYLE}>
      <span>step 1 of 2</span>
      <br />
      <button className="btn btn-primary mx-2"></button>
      <button className="btn  border border-secondary"></button>

      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            {...register("email")} //register email in a object using react hook form
            //hide error msg when user change the form data
            onInput={() => {
              setIsSubmitted(false);
              setEmailError(""); //set email error to null so that it dissapear
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            {...register("password")} //register password in a object using react hook form
            //hide error msg when user change the form data
            onInput={() => {
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
            type="password"
            name="repeatedPassword"
            id="password"
            className="form-control"
            {...register("repeatedPassword")}
            //hide error msg when user change the form data
            onInput={() => {
              setIsSubmitted(false);
            }}
          />
        </div>
        {/* show just one error if user submit the form */}
        {combinedError ? (
          <span className="text-danger fw-normal">{combinedError}</span>
        ) : (
          <br />
        )}
        <div className="button-container py-2">
          {/* if there is an error show it */}
          <button
            onClick={() => setIsSubmitted(true)}
            type="submit"
            className="btn btn-success col-4"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
