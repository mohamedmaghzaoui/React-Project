import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Contexts/userContext.js";
import axios from "axios";
import { Freelancer } from "../Freelancer/freelance.js";
import { EditProfilePopup } from "./EditProfilePopup.js";
import { Desc } from "./Desc.js";
import { LanguageForm } from "./LanguageForm.js";

export const ProfilePage = () => {
  const { username } = useContext(UserContext); // Assuming setUsername is a function to set username
  const { desc, setDesc } = useContext(UserContext); // Assuming setUsername is a function to set username
  const { language, setLanuage } = useContext(UserContext); // Assuming setUsername is a function to set username
  const [showPopup, setShowPopup] = useState(false); // Déclaration de showPopup avec useState
  const [showPopupDesc, setShowPopupDesc] = useState(false); // Déclaration de showPopup avec useState
  const [showPopupLanguage, setShowPopupLanguage] = useState(false); // Déclaration de showPopup avec useState

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopupDesc = () => {
    setShowPopupDesc(!showPopupDesc);
  };
  const togglePopupLanguage = () => {
    setShowPopupLanguage(!showPopupLanguage);
  };

  return (
    <div className="profile-page">
      <div className="small-cards-container">
        {/* Première carte avec photo de profil */}
        <div className="small-card">
          <div className="profile-image-container">
            <img
              className="img-fluid"
              src=" 
              data:image/png;base64,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
              "
              alt=""
            />
          </div>
          <div className="profile-text">
            <span>Votre nom d'affichage </span>
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="pencil-icon"
              onClick={togglePopup}
            />
          </div>
          {showPopup && <EditProfilePopup onClose={togglePopup} />}
          <div>
            <span className="mx-5">{username}</span>
          </div>
          <div className="button-divider">
            <button type="button" className="btn btn-outline-dark btn-long">
              Aperçu du profil
            </button>
            <div className="divider"></div>
            <div className="location-container">
              <span className="text-left">
                <FontAwesomeIcon icon={faLocationDot} /> De
              </span>
              <span className="text-right">France</span>
            </div>
            <br />
            <div className="location-container">
              <span className="text-left">
                <FontAwesomeIcon icon={faUser} /> Membre depuis
              </span>
              <span className="text-right">Févr.2024</span>
            </div>
          </div>
        </div>
        {/* Autres cartes plus petites à gauche */}
        <div className="small-card">
          <div className="location-container">
            <span className="text-left">Description</span>

            <span className="text-right" onClick={togglePopupDesc}>
              Modifier Description
            </span>
          </div>
          {showPopupDesc && <Desc onClose={togglePopupDesc} />}

          <div className="divider"></div>

          <br />
          <div className="location-container">
            <span className="text-left">Langues</span>
            <span className="text-right" onClick={togglePopupLanguage}>
              Ajouter
            </span>
          </div>
          {showPopupLanguage && <LanguageForm onClose={togglePopupLanguage} />}
        </div>
        <div className="small-card">Small Card 3</div>
      </div>
      <div className="space"></div>
      <div className="large-card-container">
        <div className="large-card">
          <svg
            width="800"
            height="104"
            viewBox="0 0 252 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M250.641 96.0005H0.874023V102.711H250.641V96.0005Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M195.334 0.822754H110.963L92.077 95.9933H176.448L195.334 0.822754Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M98.027 66.0029H182.398"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M77.8599 84.1191H15.3289V96.0006H77.8599V84.1191Z"
              fill="#222325"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M81.2271 74.4419H18.6961V84.1192H81.2271V74.4419Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M72.4349 59.8315H12.4169V74.4419H72.4349V59.8315Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M76.4811 50.5669H16.4631V59.8383H76.4811V50.5669Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M52.2679 59.8315V74.4419"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M59.1 59.8315V74.4419"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M59.0999 59.8315H52.2679V74.4419H59.0999V59.8315Z"
              fill="#222325"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M22.749 55.1992H69.831"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M196.202 69.8657H229.473V79.3541C229.473 83.7653 227.72 87.9959 224.6 91.1151C221.479 94.2343 217.247 95.9867 212.834 95.9867V95.9867C208.422 95.9848 204.192 94.2317 201.073 91.1126C197.954 87.9936 196.202 83.7641 196.202 79.3541V69.8657Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354"
              fill="#222325"
            ></path>
            <path
              d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M235.416 82.0409C238.532 82.0409 241.058 79.5159 241.058 76.4011C241.058 73.2863 238.532 70.7612 235.416 70.7612C232.3 70.7612 229.774 73.2863 229.774 76.4011C229.774 79.5159 232.3 82.0409 235.416 82.0409Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M206.751 64.2257C208.235 62.5883 207.787 60.0623 206.751 57.0954C206.403 55.9619 206.371 54.7548 206.658 53.6043C206.945 52.4539 207.542 51.4037 208.382 50.5669"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M214.192 64.1067C214.64 61.5806 216.866 59.0616 215.382 55.7939C213.898 52.5261 211.812 51.1896 212.708 46.2915"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M219.967 63.4768C219.673 61.6994 220.772 60.356 221.451 57.8789C221.653 57.0598 221.688 56.2085 221.555 55.3755C221.421 54.5425 221.122 53.7448 220.674 53.0298"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M114.445 85.8049C117.764 82.7671 118.388 78.0494 115.84 75.2677C113.292 72.486 108.536 72.6936 105.217 75.7314C101.898 78.7693 101.274 83.487 103.822 86.2687C106.37 89.0504 111.126 88.8428 114.445 85.8049Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M125.558 77.8633H150.289"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M124.606 83.2725H141.763"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M167.53 74.3018L168.93 78.3602C168.941 78.364 168.954 78.364 168.965 78.3602L173.347 79.095C173.396 79.095 173.403 79.1649 173.347 79.1999L169.553 82.4467C169.549 82.4651 169.549 82.4842 169.553 82.5026L169.455 87.0159C169.455 87.0649 169.392 87.1069 169.35 87.0789L165.633 85.0287H165.577L161.132 87.0789C161.124 87.0891 161.112 87.0956 161.098 87.0969C161.085 87.0982 161.072 87.0942 161.062 87.0859C161.052 87.0775 161.045 87.0655 161.044 87.0523C161.043 87.0392 161.047 87.0261 161.055 87.0159L162.546 82.5026C162.553 82.4846 162.553 82.4647 162.546 82.4467L159.9 79.2349C159.894 79.2251 159.891 79.214 159.89 79.2026C159.89 79.1912 159.892 79.1798 159.897 79.1694C159.901 79.1591 159.909 79.1501 159.918 79.1432C159.927 79.1363 159.938 79.1317 159.949 79.1299L164.59 78.3952C164.608 78.4007 164.628 78.4007 164.646 78.3952L167.446 74.3368C167.453 74.2528 167.516 74.2528 167.53 74.3018Z"
              fill="#1DBF73"
              stroke="#1DBF73"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M104.537 33.1716C109.381 28.1475 128.435 17.7775 140.685 30.7156C152.935 43.6536 161.3 44.2134 171.8 38.9794C182.3 33.7454 188.523 35.3058 188.523 35.3058"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M173.662 0.822754C173.662 0.822754 147.062 35.5364 185.562 49.8949"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M137.859 28.4066C141.674 24.9146 142.392 19.4915 139.462 16.2937C136.533 13.0958 131.066 13.3342 127.251 16.8262C123.436 20.3181 122.718 25.7413 125.647 28.9391C128.577 32.137 134.044 31.8986 137.859 28.4066Z"
              fill="#222325"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M120.217 46.8441C123.241 54.7301 133.398 58.1727 142.897 54.5411C152.396 50.9095 157.66 41.5681 154.636 33.6611L120.217 46.8441Z"
              stroke="#222325"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>
          </svg>
          <span className="m-5 text fw-bold">
            Prêt à gagner de l'argent selon vos propres règles ?
          </span>
          <button onClick={Freelancer} className="btn btn-success btn-long">
            Devenir freelancer{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
