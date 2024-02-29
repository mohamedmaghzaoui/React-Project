import { useState } from "react";
import { Progress } from "./progress";
export const FirstForm = () => {
  const [Languages, setLanguages] = useState(null);
  const [language, setLanguage] = useState("");
  const addLanguage = () => {
    const languageObject = {};
    setLanguages();
  };

  return (
    <div>
      <Progress />
      <h2 className="text-light-emphasis mx-5">Personal Information</h2>
      <p className="text-light-emphasis mx-5">
        Tell us a bit about yourself. This information will appear on your
        <br />
        public profile, so that potential buyers can get to know you better.
      </p>
      <form className="col-5 mx-5 my-4">
        <div className="row my-3">
          <label className="col-3">Profile image</label>
          <input className="form-control col" type="file" />
        </div>
        <br />
        <div className="row my-3">
          <label className="col-3">Profile Description</label>
          <textarea className="form-control col" cols="30" rows="3"></textarea>
        </div>
        <br />
        <div className="row  my-3">
          <label className="col-3">Languages</label>
          <input
            onChange={(e) => setLanguage(e.target.value)} //set the language state to current value
            className="form-control col"
            type=""
          />
          <button className="col-2 btn btn-success ">Add</button>
        </div>
        {language}

        <button className="btn btn-success col-2 my-5">Continue</button>
      </form>
    </div>
  );
};
