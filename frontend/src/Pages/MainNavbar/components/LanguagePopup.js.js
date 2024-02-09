import React, { useState, useEffect } from "react";
import axios from "axios";

const LANGUAGE_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    zIndex: "9999",
    textAlign: "left", // Aligner le texte à gauche
    borderRadius: "25px",
    width: "500px", // Ajuster la largeur de la pop-up
    height: "400px", // Ajuster la hauteur de la pop-up
}

const BUTTON_STYLE = {
    marginLeft: "10px", // Ajouter un espacement entre les boutons
}

export default function Language({ openPop, onClosePop }) {
    // React States
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");

    // Fetch languages
    useEffect(() => {
        axios.get("https://api.example.com/languages")
            .then(response => {
                setLanguages(response.data.languages);
            })
            .catch(error => {
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
        <button key={index} onClick={() => handleLanguageClick(language.code)} style={BUTTON_STYLE}>
            {language.name}
        </button>
    ));

    if (!openPop) return null;
    return (
        <div style={LANGUAGE_STYLE} onClick={handleOutsideClick}>
            <button onClick={onClosePop}>x</button>
            <div className="title">Language</div>
            <div className="title">english </div>

            
            <div className="languages">
                {renderLanguages}
            </div>
            <div className="button-container">
                <button onClick={handleLanguage}>Language</button>
            </div>
        </div>
    );
}
