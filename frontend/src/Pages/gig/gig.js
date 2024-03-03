import React from "react";
import Slider from "../slider/slider";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import "./Gig.css";


const Gig = () => {
  const images = [
    "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  ];

  return (
<div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Graphics & Design</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="pp"
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          {/* Passer les images en tant que prop au composant Slider */}
          <Slider images={images} />
          <h2>About the gig</h2>
          <p>On sait depuis longtemps que travailler
            avec du texte lisible et contenant du sens
            est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même.
            L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
            Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale,
            et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pp" />
              <div className="info">
                <span>Jhon Doe</span>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title"></span>
                  <span className="desc"></span>

                </div>

              </div>
              <hr />
              <p>
              On sait depuis longtemps que travailler
            avec du texte lisible et contenant du sens
            est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même.
            L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
            Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale,
            et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
              </p>
            </div>
          </div>
            <div  className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pp" />
                <div className="info">
                  <span>Jhon Doe</span>
                  <div className="country"> 
                  <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" />
                  <span>United States</span>
                  </div>
                </div>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
              On sait depuis longtemps que travailler
            avec du texte lisible et contenant du sens
            est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même.
            L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
            Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale,
            et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
              </p>
              <div className="helpfull">
                <span>Helpfull</span>
                <span><AiTwotoneLike /></span>
                <span>YES</span>
                <span><AiTwotoneDislike /></span>

                <span>NO</span>
              </div>
              </div>
                </div>
                <hr/>
            <div className="item">
              <div className="user">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pp" />
                <div className="info">
                  <span>Jhon Doe</span>
                  <div className="country"> 
                  <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" />
                  <span>United States</span>
                  </div>
                </div>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
              On sait depuis longtemps que travailler
            avec du texte lisible et contenant du sens
            est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même.
            L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
            Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale,
            et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
              </p>
              <div className="helpfull">
                <span>Helpfull</span>
                <span><AiTwotoneLike /></span>
                <span>YES</span>
                <span><AiTwotoneDislike /></span>

                <span>NO</span>
              </div>
              </div>
                </div>
                <hr/>
            <div className="item">
              <div className="user">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pp" />
                <div className="info">
                  <span>Jhon Doe</span>
                  <div className="country"> 
                  <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png" alt="" />
                  <span>United States</span>
                  </div>
                </div>
                <div className="stars">
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <img src="./star.png" alt="" />
                  <span>5</span>
                </div>
                <p>
              On sait depuis longtemps que travailler
            avec du texte lisible et contenant du sens
            est source de distractions, et empêche
            de se concentrer sur la mise en page elle-même.
            L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte.
            Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale,
            et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil,
            voire des phrases embarassantes).
              </p>
              <div className="helpfull">
                <span>Helpfull</span>
                <span><AiTwotoneLike /></span>
                <span>YES</span>
                <span><AiTwotoneDislike /></span>

                <span>NO</span>
              </div>
              </div>
                </div>
                <hr/>
            </div>
        </div>
        <div className="right"></div> {/* This div was missing in your code */}
      </div>
    </div>

    

  );
};

export default Gig;
