import React, { useState } from "react";
import { InitialPage } from "./components/InitialPage";
import { FirstForm } from "./components/firstForm";
import { SecondPage } from "./components/secondPage";
import { SecondForm } from "./components/secondForm";
import { LastForm } from "./components/lastForm";

export const Freelancer = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState(null);

  return (
    <div>
      {currentForm === 0 ? (
        <InitialPage setCurrentForm={setCurrentForm} />
      ) : null}
      {currentForm === 1 ? (
        <SecondPage setCurrentForm={setCurrentForm} />
      ) : null}
      {currentForm === 2 ? (
        <FirstForm setFormData={setFormData} setCurrentForm={setCurrentForm} />
      ) : null}
      {currentForm === 3 ? (
        <SecondForm
          formData={formData}
          setFormData={setFormData}
          setCurrentForm={setCurrentForm}
        />
      ) : null}
      {currentForm === 4 ? <LastForm setCurrentForm={setCurrentForm} /> : null}
    </div>
  );
};
