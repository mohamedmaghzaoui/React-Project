import React, { useState } from "react";
import "./FavoriteButton.css"; // Assurez-vous d'importer la feuille de style CSS

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="favorite-container">
      <div className="button-container">
        <button
        style={{position:"absolute" ,left:"90%"}}
          className={`btn ${isFavorite ? "btn-danger" : "btn-success"} `}
          onClick={toggleFavorite}
        >
          {isFavorite ? "Retirer des favoris" : "+ Créer une liste  "}
        </button>
      </div>
      <div className="text-container">
        <h1>Mes favoris</h1>
        {isFavorite && <p>Ce contenu est dans vos favoris!</p>}
      </div>
    </div>
  );
};

export default FavoriteButton;
