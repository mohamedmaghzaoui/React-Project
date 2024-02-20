import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup"; //yup library for error validation
import { yupResolver } from "@hookform/resolvers/yup"; //yup resolver to connect between useForm and yup
import { useState } from "react";

const FORM_STYLE = {
  flex: "1",
};
export const RenderForm = () => {
  //api error state of error reciaved from symfony when username or password are wrong
  const [apiError, setApiError] = useState(null);
  //yup user schema for login validation
  const loginSchema = yup.object().shape({
    //email validation
    email: yup.string().required("email is required"),
    //password validation
    password: yup.string().required("password is required"),
  });
  //useForm library
  const {
    register,
    handleSubmit, //function to manage data that are registerd in user object
    formState: { errors }, //form errors
  } = useForm({
    resolver: yupResolver(loginSchema), //chose loginSchema for validation
  }); //use useform library
  //function to send data to symfony server
  const submitData = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        userData
      );
      console.log(response);
    } catch (error) {
      //if erros is 401 show invalid credential error
      if (error.response && error.response.status === 401) {
        setApiError("invalid credential");
      }
    }
  };
  //hide api error when user change email or passwod
  const hideApiError = () => {
    setApiError(null);
  };
  return (
    <div className="form-group" style={FORM_STYLE}>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            onInput={hideApiError}
            type="email"
            name="uname"
            className="form-control"
            id="exampleInputEmail1"
            {...register("email")} //register email in user data object
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onInput={hideApiError}
            type="password"
            name="pass"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")} //register password in user data password
          />
        </div>
        {/* if email or password are empty or api error exist display an error */}
        {errors.email?.message || errors.password?.message || apiError ? (
          <span className="text-danger fw-normal">
            {/* display api error or form error*/}
            {apiError ? apiError : "please fill email and password"}
          </span>
        ) : (
          <p />
        )}
        <br />
        <br />
        <button type="submit" className="btn btn-success col-4 ">
          Login
        </button>
      </form>
    </div>
  );
};
