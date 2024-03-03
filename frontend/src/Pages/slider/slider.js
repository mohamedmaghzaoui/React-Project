import React, { useState } from "react";
import { IconName } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import "./slider.css"



const Slider = ({ images }) => {
  // Définition de l'état pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la diapositive précédente
  const goToPrevSlide = () => {
    // Calcul de l'index de la diapositive précédente en prenant en compte le défilement circulaire
    const index = (currentIndex - 1 + images.length) % images.length;
    // Mise à jour de l'état avec le nouvel index
    setCurrentIndex(index);
  };

  // Fonction pour passer à la diapositive suivante
  const goToNextSlide = () => {
    // Calcul de l'index de la diapositive suivante en prenant en compte le défilement circulaire
    const index = (currentIndex + 1) % images.length;
    // Mise à jour de l'état avec le nouvel index
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {/* Bouton pour passer à la diapositive précédente */}
      <button onClick={goToPrevSlide}><GrFormPreviousLink />
</button>
      {/* Div contenant l'image actuellement affichée */}
      <div className="slide">
        {/* Image actuellement affichée, avec l'URL provenant du tableau d'images et un attribut alt */}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      {/* Bouton pour passer à la diapositive suivante */}
      <button onClick={goToNextSlide}><GrFormNextLink />

</button>
    </div>
  );
};

export default Slider;
