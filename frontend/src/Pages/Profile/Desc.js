import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Contexts/userContext";
import axios from "axios";

export const Desc = ({ onClose }) => {
  //initial submit buttons state
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
  const [newDesc, setNewDesc] = useState("");
  const { register, handleSubmit } = useForm();
  //get user data and setusername from context
  const { userProfileData } = useContext(UserContext);
  const { setUsername } = useContext(UserContext);

  const submitData = async (data) => {
    let url = "http://localhost:8000/change_description";
    try {
      //set submit buttons to spiiner for better user experience
      setSubmit(
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
      const response = await axios.post(url, data);

      setUsername((prev) => prev + "a"); //change username to refetch userdata and re render

      onClose();
    } catch (error) {}
  };

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">change your description</h2>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-group">
            <label htmlFor="newDesc"> description :</label>
            <textarea
              defaultValue={userProfileData.description}
              className="form-control"
              id="newDesc"
              rows={5}
              {...register("description")}
            ></textarea>
          </div>
          <br />
          {submit}
        </form>
      </div>
    </div>
  );
};
