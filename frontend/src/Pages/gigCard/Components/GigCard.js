import React from "react";
import "./GigCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import star from "./star.png";
import { Link } from "react-router-dom";

const GigCard = ({ item, index }) => {
  console.log(index);
  return (
    <Link to="/gig" className="link">
      <div className="gigCard">
        <img src={item.pp} alt="Projet" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src={star} alt="" id="starimg" />
            <span>{item.star}</span>
          </div>
          <div className="like"></div>
        </div>
        <hr />
        <div className="details">
          <div className="item-info">
            <span>{item.desc}</span>
            <span className="price">STARTING AT {item.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
