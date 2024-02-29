import React, { useState, useEffect } from "react";
import axios from "axios";

const LANGUAGE_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  zIndex: "9999",
  textAlign: "left", // Aligner tout le contenu à gauche
  borderRadius: "25px",
  width: "500px", // Ajuster la largeur de la pop-up
  height: "400px", // Ajuster la hauteur de la pop-up
  padding: "20px", // Ajouter un padding
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Ajouter une ombre
};

const BUTTON_STYLE = {
  margin: "5px", // Ajouter un espace entre les boutons
  padding: "10px", // Ajouter un padding
  borderRadius: "5px", // Arrondir les coins des boutons
  backgroundColor: "#f0f0f0", // Couleur de fond des boutons
  border: "1px solid #ccc", // Bordure des boutons
};

export default function Language({ openPop, onClosePop }) {
  // React States
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Fetch languages
  useEffect(() => {
    axios
      .get("https://api.example.com/languages")
      .then((response) => {
        setLanguages(response.data.languages);
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
      });
  }, []);

  const handleLanguageClick = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const handleLanguage = () => {
    // Handle login logic here
    console.log("Selected language:", selectedLanguage);
  };

  const handleOutsideClick = (event) => {
    // Close the popup if the click is outside the login component
    if (event.target === event.currentTarget) {
      onClosePop();
    }
  };

  const renderLanguages = languages.map((language, index) => (
    <button
      key={index}
      onClick={() => handleLanguageClick(language.code)}
      style={BUTTON_STYLE}
    >
      {language.name}
    </button>
  ));

  if (!openPop) return null;
  return (
    <div style={LANGUAGE_STYLE} onClick={handleOutsideClick}>
      <button style={{ float: "right", border: "none", background: "none", cursor: "pointer" }} onClick={onClosePop}>x</button>
      <div className="title">Language</div>
      <br />
      <div className="languages">{renderLanguages}</div>
      <div className="button-container">
        <div>anglais <br />Français</div>
      </div>
    </div>
  );
}
