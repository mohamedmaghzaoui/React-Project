import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer le composant Link pour la navigation

const GigsPage = () => {
    const [gigs, setGigs] = useState([]);


    return (
        <div>
            <h1>Liste des Gigs</h1>

            {/* Bouton pour accéder à la page de création de nouveaux gigs */}
            <Link to="/GigForm">
                <button>Ajouter un Nouveau Gig</button>
            </Link>

            {/* Afficher tous les GigCards existants */}
            <div className="gigList">
                {gigs.map(gig => (
                    <div key={gig.id} className="gigCard">
                        <img src={gig.img} alt="Gig" />
                        <div className="info">
                            <div className="user">
                                <img src={gig.pp} alt="User" />
                                <span>{gig.username}</span>
                            </div>
                            <p>{gig.desc}</p>
                            <div className="star">
                                <img src="./img/star.png" alt="Star" />
                                <span>{gig.star}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GigsPage;
