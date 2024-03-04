import React from "react";
import "./GigCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import star from "./star.png";
import { Link } from "react-router-dom";

const GigCard = ({ item, index }) => {
  return (
    <Link
      to="/gig"
      className="link"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="gigCard">
        <img
          className="img-fluid"
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png"
        />
        <span className="fw-bold">{item.title}</span>
        <div className="info">
          <div className="user">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/690bb0e381bc3fe55bcd83a4e7914fbc-1706099369762/509849b5-9e3b-4260-ae3f-be22d8a49861.png" />
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
            <span className="text-truncate" style={{maxWidth: '50px'}}>{item.description}</span>
            <span className="price">{item.price}€</span>
          </div>
          
        </div>
        <div className="d-flex justify-content-end mt-2">
        <Link to={`/${item.id}`} className="btn btn-light">En Voir Plus</Link>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
