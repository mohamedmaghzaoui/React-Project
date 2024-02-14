//import libraries
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form"; //useForm to manages form data
import * as yup from "yup"; //yup library for error validation
import { yupResolver } from "@hookform/resolvers/yup"; //yup resolver to connect between useForm and yup
const FORM_STYLE = {
  flex: "1",
};
export const RenderForm = () => {
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
  //function to submit user data to symfony server
  const submitData = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/adduser",
        userData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  //show just one  error only if user submit data else show nothing
  const combinedError =
    (isSubmitted ? errors.email?.message : null) || //email error
    (isSubmitted ? errors.password?.message : null) || //password error
    (isSubmitted ? errors.repeatedPassword?.message : null); //repeated password error

  //cheeck wether to show or not the form component
  console.log(combinedError);
  return (
    <div className="form" style={FORM_STYLE}>
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
            onChange={() => {
              setIsSubmitted(false);
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
            type="password"
            name="repeatedPassword"
            id="password"
            className="form-control"
            {...register("repeatedPassword")}
            //hide error msg when user change the form data
            onChange={() => {
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
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
