//import libraries
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../Contexts/userContext";

export const EditProfilePopup = ({ onClose }) => {
  //initail state for submit buttons
  const [submit, setSubmit] = useState(
    <div>
      <button type="submit" className="btn btn-primary mr-2">
        Enregistrer
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Fermer
      </button>
    </div>
  );
  //get username and userProfileData from context
  const { username, setUsername } = useContext(UserContext);
  const { userProfileData } = useContext(UserContext);
  //function to send data to symfony
  const submitData = async (data) => {
    //symfony url
    const url = "http://localhost:8000/change_userdata";
    try {
      setSubmit(
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
      const response = await axios.post(url, data);
      setUsername((prev) => prev + "a"); //change the username state by adding letter a  to re render
    } catch (error) {}
    //close form
    onClose();
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">change user datar</h2>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-group">
            <label htmlFor="newUsername">username:</label>

            <input
              //setdefault value to username from context and register username using useForm
              defaultValue={username}
              {...register("username")}
              style={{ height: "40px" }}
              type="text"
              class="form-control"
            />
            <br />
            <label htmlFor="newUsername">country:</label>
            <select
              //setdefault value to country from context and register country using useForm
              {...register("country")}
              class="form-select col"
              aria-label="Default select example"
            >
              <option selected>{userProfileData.country}</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Spain">Spain</option>
            </select>
            <br />
            <label htmlFor="newUsername">occupation</label>
            <select
              //setdefault value to occupation from context and register occupation using useForm
              {...register("occupation")}
              class="form-select col"
              aria-label="Default select example"
            >
              <option selected>{userProfileData.occupation}</option>
              <option value="Technology">Technology</option>
              <option value="Graphics">Graphics</option>
              <option value="Animation">Animation</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <br />
          {/* submit state that can be buttons or spinner*/}
          {submit}
        </form>
      </div>
    </div>
  );
};
