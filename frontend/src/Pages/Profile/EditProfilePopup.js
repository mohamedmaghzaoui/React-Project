import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../Contexts/userContext";

export const EditProfilePopup = ({ onClose }) => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(UserContext);

  const submitData = async (data) => {
    console.log(data);
    const url = "http://localhost:8000/change_username";
    try {
      const response = await axios.post(url, data);
      setUsername((prev) => prev + "a"); //change the username state by adding letter a  to re render
    } catch (error) {}

    onClose();
  };

  const handleChange = (event) => {
    setNewUsername(event.target.value);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">Changer le nom d'utilisateur</h2>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="form-group">
            <label htmlFor="newUsername">Nouveau nom d'utilisateur:</label>
            <input
              {...register("username")}
              type="text"
              className="form-control"
              id="newUsername"
              value={newUsername}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Enregistrer
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </form>
      </div>
    </div>
  );
};
