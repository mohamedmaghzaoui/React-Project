import React from "react";
import Slider from "react-slick";
import gigsData from "../../gigs.json"


const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left"></div>
                <span className="breadCrumbs">FIVERR : Graphics & Design</span>
                <h1>I will create ai artwork</h1>

                <div className="user">
                    <img src="#" alt="" />
                    <span>John Doe</span>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src="http://localhost:3000/etoile.png" alt="" className="star-icon" />
                        ))}
                        <span>5</span>
                    </div>
                </div>

                <Slider slidesToShow={1} arrowScroll={1}>
                    <img src="http://localhost:3000/img1.png" alt="" />
                    <img src="http://localhost:3000/img1.png" alt="" />
                    <img src="http://localhost:3000/img1.png" alt="" />
                </Slider>

                <div className="right"></div>
            </div>
        </div>
    );
};

export default Gig;
