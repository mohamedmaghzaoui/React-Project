import React from "react";
import "./GigCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom

const GigCard = ({ item }) => {
  // Assurez-vous que item est défini
  if (!item) return null;

  const { pp, username, desc, star, price } = item;

  return (
    <Link to="/gig" className="link">
      <div className="gigCard">
        <div className="user">
          <img src={pp} alt="Profile" className="profilePicture" />
          <span className="username">{username}</span>
        </div>
        <p className="description">{desc}</p>
        <div className="rating">
          <FontAwesomeIcon icon={faThumbsUp} className="likeIcon" />
          <span className="star">{star}</span>
        </div>
        <hr />
        <div className="details">
          <div className="item-info">
            <span className="desc">{desc}</span>
            <span className="price">STARTING AT {price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
