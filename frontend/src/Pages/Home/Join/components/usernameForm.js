import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../../Contexts/userContext";

export const UsernameForm = (props) => {
  //get set global username function to re render after a log in
  const { setUsername } = useContext(UserContext);
  const [username, setUsernameForm] = useState(); //username state
  const [UsernameError, setUsernameError] = useState(""); //state to control either to show or hide username error
  //function to handel username input
  const handelInput = (e) => {
    setUsernameForm(e.target.value);
    setUsernameError(""); //hide username error because we are filling the form
  };
  //function to send data to symfony server
  const submitData = async () => {
    const userData = {
      ...props.userData,
      username,
    };
    //sned user data to create user in database
    try {
      //show a spinner instead of error
      setUsernameError(
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
      const response = await axios.post(
        "http://localhost:8000/addUser",
        userData
      );
      //get user emais and password and put them in an object

      const userAuthentication = {
        email: userData.email,
        password: userData.password,
      };
      //send user authentication to log in after sign in
      const response2 = await axios.post(
        "http://localhost:8000/login",
        userAuthentication
      );
      console.log(response2);
      setUsername((prev) => prev + "a"); //change username to re rernder
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
      {/* if error show it*/}
      {UsernameError ? <p className="text-danger"> {UsernameError}</p> : <br />}
      <p />
      {/* get back to the first form*/}
      <button
        onClick={() => props.setForm("register")}
        className="btn btn-primary mx-3"
      >
        back
      </button>

      {/* if username is empty set show error to a required else to ""*/}
      <button
        onClick={() => {
          !username
            ? setUsernameError("username is required")
            : setUsernameError("");
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
