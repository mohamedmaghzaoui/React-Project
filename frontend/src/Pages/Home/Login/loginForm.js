import { useState } from "react";
import axios from "axios";
import style from "../Css/overlay.module.css";
import { RenderForm } from "./components/renderForm";

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
const FORM_STYLE = {
  flex: "1",
};

const IMAGE_STYLE = {
  flex: "1",
  marginRight: "20px",
};

export default function Login({ openLogin, onCloseLogin, text }) {
  // Generate JSX code for error message

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
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1709291015~exp=1709291615~hmac=146569f8b39ebba1e5e455a6cc8ecff9bc8e7ed37d87701a2f7c1ecbc1fda571"
            alt="Login Image"
            style={{ width: "100%" }}
          />
        </div>
        <div style={FORM_STYLE}>
          <div style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
            {text ? text : <span>login</span>}
          </div>
          <RenderForm closeForm={onCloseLogin} />
        </div>
      </div>
    </div>
  );
}
