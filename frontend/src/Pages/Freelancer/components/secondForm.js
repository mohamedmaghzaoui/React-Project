import { useState } from "react";

import { Progress } from "./progress";
import { Table } from "./table";
export const SecondForm = (props) => {
  const [Languages, setLanguages] = useState("");
  const [language, setLanguage] = useState("");
  const addLanguage = () => {
    if (!Languages.includes(language)) {
      setLanguages([...Languages, language]);
    } else {
      alert("language exist alredy");
    }
  };

  return (
    <div>
      <Progress second="second" />
      <h2 className="text-light-emphasis mx-5">Profetional Information</h2>
      <p className="text-light-emphasis mx-5">
        This is your time to shine. Let potential buyers know what you do best
        <br />
        and how you gained your skills, certifications and experience.
      </p>
      <form className="col-5 mx-5 my-4">
        <div className="row my-3">
          <label className="col-3">Occupation</label>
          <select class="form-select col" aria-label="Default select example">
            <option selected>Select your current Occupation</option>
            <option value="1">Technology</option>
            <option value="2">Graphics</option>
            <option value="3">Animation</option>
            <option value="3">Design</option>
          </select>
        </div>

        <br />
        <div className="row  my-3">
          <label className="col-3">Languages</label>
          <input
            onChange={(e) => setLanguage(e.target.value)} //set the language state to current value
            className="form-control col"
            type=""
          />
          <a
            onClick={() => {
              addLanguage();
            }}
            className="col-2 btn btn-success "
          >
            Add
          </a>
          <br />
          {Languages && (
            <Table setLanguages={setLanguages} Languages={Languages} />
          )}
        </div>

        <button
          onClick={() => props.setCurrentForm(4)}
          className="btn btn-success btn-lg col-3  "
        >
          Continue
        </button>
        <span
          onClick={() => props.setCurrentForm(2)}
          style={{ cursor: "pointer" }}
          className="text-primary mx-5 fs-5"
        >
          back
        </span>
      </form>
    </div>
  );
};
