import React, { useState } from "react";
import { InitialPage } from "./components/InitialPage";
import { SecondPage } from "./components/secondPage";
import { FirstForm } from "./components/firstForm";

export const Freelancer = () => {
  const [currentForm, setCurrentForm] = useState(0);

  return (
    <div>
      {currentForm === 0 ? (
        <InitialPage setCurrentForm={setCurrentForm} />
      ) : null}
      {currentForm === 1 ? (
        <SecondPage setCurrentForm={setCurrentForm} />
      ) : null}
      {currentForm === 2 ? <FirstForm setCurrentForm={setCurrentForm} /> : null}
    </div>
  );
};
