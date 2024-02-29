import React from "react";
import './GigCard.css';
import like from "./like.png";
import star from "./star.png";

import { Link } from "react-router-dom";

const GigCard = ({item, index}) => {
    console.log(index);
    return (
        <Link to="/gig" className="link">
            <div className='gigCard'>
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
                </div>
                <hr />


                <div className="details">
                    <img src={like} alt="" id="#likeimg"/>
                    <div className="price">
                        <span>{item.price}$</span>
                        <span>STARTING AT</span>
                        <h2>{item.price}</h2>
                        <h1>{item.desc}</h1>
                    </div>     
                 </div>
                
            </div>

        </Link>
    );
}

export default GigCard;