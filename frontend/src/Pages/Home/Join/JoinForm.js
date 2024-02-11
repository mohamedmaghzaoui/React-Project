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

export default function Join({ openJoin, onCloseJoin }) {
  const renderForm = (
    <div className="form" style={FORM_STYLE}>
      <form method="post" action="http://localhost:8000/create1">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {" "}
            Repeat Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

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
      <div style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Join us</div>
      {renderForm}
    </div>
  );
}
