// components/NewNavbar.js

import React, { useState, useEffect } from "react";
import { GoSearch, GoHeart, GoMail, GoBell, GoPerson } from "react-icons/go";
import "./NewNavbar.css";

function NewNavbar() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenJoin, setIsOpenJoin] = useState(false);

  // Utilisez useEffect pour activer les tooltips après le rendu du composant
  useEffect(() => {
    // Sélectionnez tous les éléments de bouton avec l'attribut data-bs-toggle="tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    
    // Créez des instances de tooltip pour chaque élément
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Nettoyez les instances de tooltip lors du démontage du composant
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom mb-4">
      <div className="container">
        {/* ... (autres éléments) */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline mx-auto">
            {/* ... (autres éléments) */}
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* Ajoutez l'attribut data-bs-toggle et data-bs-title pour activer le tooltip */}
              <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip pour la recherche"
              >
                <GoSearch />
              </button>
            </li>
            <li className="nav-item">
              {/* Ajoutez l'attribut data-bs-toggle et data-bs-title pour activer le tooltip */}
              <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip pour le cœur"
              >
                <GoHeart />
              </button>
            </li>
            <li className="nav-item">
              {/* Ajoutez l'attribut data-bs-toggle et data-bs-title pour activer le tooltip */}
              <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip pour la messagerie"
              >
                <GoMail />
              </button>
            </li>
            <li className="nav-item">
              {/* Ajoutez l'attribut data-bs-toggle et data-bs-title pour activer le tooltip */}
              <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip pour la cloche"
              >
                <GoBell />
              </button>
            </li>
            <li className="nav-item">
              {/* Ajoutez l'attribut data-bs-toggle et data-bs-title pour activer le tooltip */}
              <button
                className="btn btn-icon"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Tooltip pour le profil"
              >
                <GoPerson />
              </button>
            </li>
          </ul>

          {/* ... (autres éléments) */}
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;