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

export default function Login({ openLogin, onCloseLogin }) {
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
            src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
            alt="Login Image"
            style={{ width: "100%" }}
          />
        </div>
        <div style={FORM_STYLE}>
          <div style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Login</div>
        </div>
        <RenderForm />
      </div>
    </div>
  );
}
