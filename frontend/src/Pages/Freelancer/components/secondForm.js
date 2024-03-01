import { useState } from "react";
import axios from "axios";
import { Progress } from "./progress";
import { Table } from "./table";
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit } = useForm(); //use useform library
  const sendData = async (secondFormData) => {
    const freelancerData = {
      ...props.formData,
      ...secondFormData,
      languages: Languages,
    };
    console.log(freelancerData);
    try {
      let url = "http://localhost:8000/add_freelancer";
      const response = await axios.post(url, freelancerData);
    } catch (error) {}
    props.setCurrentForm(4);
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
      <form onSubmit={handleSubmit(sendData)} className="col-5 mx-5 my-4">
        <div className="row my-3">
          <label className="col-3">Occupation</label>
          <select
            {...register("occupation")}
            class="form-select col"
            aria-label="Default select example"
          >
            <option selected>Select your current Occupation</option>
            <option value="Technology">Technology</option>
            <option value="Graphics">Graphics</option>
            <option value="Animation">Animation</option>
            <option value="Design">Design</option>
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
          <span
            onClick={() => {
              addLanguage();
            }}
            className="col-2 btn btn-success "
          >
            Add
          </span>
          <br />
          {Languages && (
            <Table setLanguages={setLanguages} Languages={Languages} />
          )}
        </div>

        <button className="btn btn-success btn-lg col-3  ">Continue</button>
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
