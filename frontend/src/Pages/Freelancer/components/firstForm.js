import { useState } from "react";
import { Progress } from "./progress";
import { useForm } from "react-hook-form";

export const FirstForm = (props) => {
  const sendData = (firstFormData) => {
    props.setCurrentForm(3);

    props.setFormData(firstFormData);
  };
  const { register, handleSubmit } = useForm(); //use useform library
  return (
    <div>
      <Progress />
      <h2 className="text-light-emphasis mx-5">Personal Information</h2>
      <p className="text-light-emphasis mx-5">
        Tell us a bit about yourself. This information will appear on your
        <br />
        public profile, so that potential buyers can get to know you better.
      </p>
      <form onSubmit={handleSubmit(sendData)} className="col-5 mx-5 my-4">
        <div className="row my-3">
          <label className="col-3">Profile image</label>
          <input
            className="form-control col"
            type="file"
            {...register("user_image")}
          />
        </div>
        <br />
        <div className="row my-3">
          <label className="col-3">Profile Description</label>
          <textarea
            required
            {...register("description")}
            className="form-control col"
            cols="30"
            rows="3"
          ></textarea>
        </div>
        <br />
        <div className="row  my-3">
          <label className="col-3">Country</label>
          <select
            required
            {...register("country")}
            class="form-select col"
            aria-label="Default select example"
          >
            <option selected>France</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Spain">Spain</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success btn-lg col-3  ">
          Continue
        </button>
        <span
          onClick={() => props.setCurrentForm(1)}
          style={{ cursor: "pointer" }}
          className="text-primary mx-5 fs-5"
        >
          back
        </span>
      </form>
    </div>
  );
};
