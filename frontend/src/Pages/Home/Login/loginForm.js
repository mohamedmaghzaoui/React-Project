import { useState } from "react";
import axios from "axios";
import style from "../Css/overlay.module.css";

const LOGIN_STYLE = {
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

export default function Login({ openLogin, onCloseLogin }) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = event.target.elements;

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleOutsideClick = (event) => {
    // Close the popup if the click is outside the login component
    if (event.target === event.currentTarget) {
      onCloseLogin();
    }
  };

  const renderForm = (
    <div className="form" onClick={handleOutsideClick} style={FORM_STYLE}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="uname"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="pass"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );

  if (!openLogin) return null;
  return (
    <div className={style.overlay}>
      <div style={LOGIN_STYLE}>
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
          onClick={onCloseLogin}
        >
          &times;
        </button>
        <div style={IMAGE_STYLE}>
          <img
            src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
            alt="Login Image"
            style={{ width: "100%" }}
          />
        </div>
        <div style={FORM_STYLE}>
          <div style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Login</div>
          {renderForm}
        </div>
      </div>
    </div>
  );
}
