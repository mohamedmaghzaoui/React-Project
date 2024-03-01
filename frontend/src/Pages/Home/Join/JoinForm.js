import { useState } from "react";
import { RegisterForm } from "./components/registerForm"; //first form
import { UsernameForm } from "./components/usernameForm"; //second form
import style from "../Css/overlay.module.css";

//style
const JOIN_STYLE = {
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
export default function Join({ openJoin, onCloseJoin }) {
  const [userData, setUserData] = useState(); //user information state
  const [form, setForm] = useState("register"); //form state used to either show first register form or second username form
  if (!openJoin) return null;
  return (
    <div className={style.overlay}>
      <div style={JOIN_STYLE}>
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
          //hide form
          onClick={onCloseJoin}
        >
          &times;
        </button>
        <div style={IMAGE_STYLE}>
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?t=st=1709291346~exp=1709294946~hmac=e96622848c0a2adfd0b74c40094b2cc35b685aea5a437756244b2fd6839ef7da&w=740"
            alt="Join Image"
            style={{ width: "100%" }}
          />
        </div>
        <h2>Join us</h2>
        {/* condition to either show first or second form */}
        {form === "register" ? (
          //send props set userdata  and form state
          <RegisterForm setForm={setForm} setUserData={setUserData} />
        ) : (
          //send props of  set Form userdata state and closeform function
          <UsernameForm
            closeForm={onCloseJoin}
            setForm={setForm}
            userData={userData}
          />
        )}
      </div>
    </div>
  );
}
