import { useState } from "react";
import axios from "axios";


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
}

const LOGIN_TITTLE = {

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
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];

   

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
    <div className="form" onClick={handleOutsideClick}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  if (!openLogin) return null;
  return (
    <div style={LOGIN_STYLE}>
      <button onClick={onCloseLogin}>x</button>
      <div className="title">login</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}
