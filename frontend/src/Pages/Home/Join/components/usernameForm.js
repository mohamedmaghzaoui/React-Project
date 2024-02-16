import axios from "axios";
import { useState } from "react";

export const UsernameForm = (props) => {
  const [username, setUsername] = useState(); //username state
  const [showUsernameError, setShowUsernameError] = useState(false); //state to control either to show or hide username error
  //function to handel username input
  const handelInput = (e) => {
    setUsername(e.target.value);
    setShowUsernameError(false); //hide username error because we are filling the form
  };
  //function to send data to symfony server
  const submitData = async () => {
    const userData = {
      ...props.userData,
      username,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/addUser",
        userData
      );
      console.log(response);
      props.setForm("register"); //return to first form
      props.closeForm(); //close form
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* progress*/}
      <span>step 2 of 2</span>
      <br />
      <button className="btn  border border-secondary"></button>
      <button className="btn btn-primary mx-2"></button>
      <h2>Chose your username</h2>
      {/* username input*/}
      <input
        onInput={(e) => handelInput(e)}
        name=""
        type="text"
        className="form-control"
      />
      <br />
      {/* if show error is true render the username error else render nothing*/}
      {showUsernameError ? (
        <p className="text-danger"> username is required</p>
      ) : (
        <br />
      )}
      <p />
      {/* get back to the first form*/}
      <button
        onClick={() => props.setForm("register")}
        className="btn btn-primary mx-3"
      >
        back
      </button>

      {/* if username is empty set show error to true else to false*/}
      <button
        onClick={() => {
          !username ? setShowUsernameError(true) : setShowUsernameError(false);
          if (username) {
            submitData();
          }
        }}
        className="btn btn-success"
      >
        Finish
      </button>
    </div>
  );
};
