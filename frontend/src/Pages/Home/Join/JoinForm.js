import { useState } from "react";
import { RegisterForm } from "./components/registerForm"; //first form
import { UsernameForm } from "./components/usernameForm"; //second form

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
          src="https://imgs.search.brave.com/x6iqbJWLvymDlIcHHDsXqFoo6fP5UH86u2gqwTLL17U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzUzLzM0/LzM2MF9GXzQ2MjUz/MzQxMF9lNXZNRk9t/eEJHRmtCN3dEV1FE/RVd5WVhETnZ2Tndx/bi5qcGc"
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
  );
}
