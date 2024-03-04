import React from "react";
import "../gigCard/Components/GigCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import star from "../gigCard/Components/star.png";
import { Link } from "react-router-dom";

export const GigTotal = ({ gig }) => {



    const buyGig = () => {
        const data = {
                description: gig.description, // Nouveau
                title: gig.title, // Nouveau
                price: gig.price,
                id: gig.id
            };
            axios.post("http://127.0.0.1:8000/buy_by_gig", data)
                .then(res => {
                    window.location.href = res.data.link;
                })
                .catch(error => {
                    console.error("Error buying product:", error);
                });
        }


    return (

       
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg'>
                            <img  className='img-fluid' src={`https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png`}/>
                        </div>
                        <div className='col-lg'>
                            <label className='form-label text-blue'>Ce service est rendu par {gig.username}</label>
                            <h2 className='text-blue header mb-3'>{gig.title}</h2>
                            <h4 className='text-blue header'>{gig.price}€</h4>
                            <label className='form-label text-blue mb-3'>Paiement vérifié par Stripe</label>
                            <div className='mb-3'>
                                <button className='btn btn-success' onClick={buyGig}>Commander maintenant</button>
                            </div>
                            <h4 className='text-blue header'>Description</h4>
                            <p className='text-blue'>{gig.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
        
}