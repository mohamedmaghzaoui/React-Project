import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import { useForm } from "react-hook-form";
import axios from "axios";

/*const {register,handleSubmit}=useForm();*/
const SecondPage = ({ setCurrentForm }) => {
  const [gigTitle, setGigTitle] = useState("");
  const [gigDescription, setGigDescription] = useState("");
  const [gigImage, setGigImage] = useState("");
  const [gigPrice, setGigPrice] = useState("");
  const [gigDate, setGigDate] = useState(new Date().toLocaleDateString());
  const [submit, setSubmit] = useState(
    <button className="btn btn-success">Add</button>
  );
  const [message, setMessage] = useState(<h1>add a gig </h1>);

  const submitData = async (data) => {
    let url = "http://localhost:8000/newGig";
    try {
      setSubmit(
        <div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      );
      const response = await axios.post(url, data);
      setSubmit(
        <Link className="btn btn-success" to={"/gigs"}>
          see all gigs
        </Link>
      );
      setMessage(<h1 className="text-success">gig was added </h1>);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="container">
      {message}

      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-3">
          <label htmlFor="gigTitle" className="form-label">
            Titre du Gig
          </label>
          <input
            required
            {...register("gigTitle")}
            type="text"
            className="form-control"
            id="gigTitle"
            value={gigTitle}
            onChange={(e) => setGigTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gigDescription" className="form-label">
            Description du Gig
          </label>
          <textarea
            required
            {...register("gigDescription")}
            className="form-control"
            id="gigDescription"
            rows="3"
            value={gigDescription}
            onChange={(e) => setGigDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="gigImage" className="form-label">
            Image du Gig
          </label>
          <input
            {...register("gigImage")}
            type="text"
            className="form-control"
            id="gigImage"
            value={gigImage}
            onChange={(e) => setGigImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gigPrice" className="form-label">
            Prix du Gig
          </label>
          <input
            required
            {...register("gigPrice")}
            type="number"
            className="form-control"
            id="gigPrice"
            value={gigPrice}
            onChange={(e) => setGigPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="col-3">Category</label>
          <select
            {...register("category")}
            class="form-select col"
            aria-label="Default select example"
          >
            <option selected value="Technology">
              Technology
            </option>
            <option value="Graphics">Graphics</option>
            <option value="Animation">Animation</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Translation">Translation</option>
            <option value="Video">Video</option>
            <option value="Programming">Programming</option>
            <option value="Business">Business</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Photography">Photography</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          {/* Utilisez Link pour créer un lien vers la première page */}
          {/* Utilisez Link pour créer un lien vers la première page */}
          {submit}
          <Link to="/addgig" className="btn btn-success">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
