import { useState } from "react";
import axios from "axios";

const JOIN_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px",
  zIndex: "9999",
  "text-align": "center",
  "border-radius": "25px",
};

const JOIN_TITTLE = {};

export default function Join({ openJoin, onCloseJoin }) {
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Name </label>
          <input type="text" name="name" required />
        </div>
        <div className="input-container">
          <label>Lastname </label>
          <input type="text" name="lname" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="password" name="email" required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  if (!openJoin) return null;
  return (
    <div style={JOIN_STYLE}>
      <button onClick={onCloseJoin}>x</button>
      <div className="title">Join us</div>
      {renderForm}
    </div>
  );
  /* 

  const nameInput = document.getElementById("name");
  const lastnameInput = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const usernameInput = document.getElementById("uname");
  const passwordInput = document.getElementById("password");
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const name = nameInput.value;
    const lastname = lastnameInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    axios.post("##########", {
        name: name,
        lastname: lastname,
        email: email,
        username: username,
        password: password
      })
      .then((response) => {
        console.log(response);
      });
  });
  
  */
}
