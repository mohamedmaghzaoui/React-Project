import React, { useState } from "react";
import { FirstPage } from "../gig/components/firstPage";
import { SecondPage } from "./components/secondPage";

const Gig = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState(null);

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const handlePrevious = () => {
    setCurrentForm(currentForm - 1);
  };

  return (
    <div>
      {currentForm === 0 && <firstPage setCurrentForm={setCurrentForm} />}
      {currentForm === 1 && <fecondPage setCurrentForm={setCurrentForm} />}

      {/* Boutons de navigation */}
      {currentForm !== 0 && <button onClick={handlePrevious}>Previous</button>}
      {currentForm !== 4 && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default Gig;
