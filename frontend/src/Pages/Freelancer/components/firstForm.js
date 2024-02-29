import { useState } from "react";
import { Progress } from "./progress";

export const FirstForm = (props) => {
  return (
    <div>
      <Progress />
      <h2 className="text-light-emphasis mx-5">Personal Information</h2>
      <p className="text-light-emphasis mx-5">
        Tell us a bit about yourself. This information will appear on your
        <br />
        public profile, so that potential buyers can get to know you better.
      </p>
      <form className="col-5 mx-5 my-4">
        <div className="row my-3">
          <label className="col-3">Profile image</label>
          <input className="form-control col" type="file" />
        </div>
        <br />
        <div className="row my-3">
          <label className="col-3">Profile Description</label>
          <textarea className="form-control col" cols="30" rows="3"></textarea>
        </div>
        <br />
        <div className="row  my-3">
          <label className="col-3">Country</label>
          <select class="form-select col" aria-label="Default select example">
            <option selected>Select your Country</option>
            <option value="1">France</option>
            <option value="2">Germany</option>
            <option value="3">UK</option>
            <option value="3">USA</option>
            <option value="3">Spain</option>
          </select>
        </div>

        <button
          onClick={() => props.setCurrentForm(3)}
          className="btn btn-success btn-lg col-3  "
        >
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
