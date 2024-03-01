import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import {useForm} from 'react-hook-form';


/*const {register,handleSubmit}=useForm();*/
const SecondPage = ({ setCurrentForm }) => {
  const [gigTitle, setGigTitle] = useState("");
  const [gigDescription, setGigDescription] = useState("");
  const [gigImage, setGigImage] = useState("");
  const [gigPrice, setGigPrice] = useState("");
  const [gigDate, setGigDate] = useState(new Date().toLocaleDateString());

  const submitData = (data) => {
    console.log(data);
  };
  const { register, handleSubmit}=useForm();

  return (
    <div className="container">
      <h1>Ajouter votre gig</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="mb-3">
          <label htmlFor="gigTitle" className="form-label">Titre du Gig</label>
          <input {...register('gigTitle')}type="text" className="form-control" id="gigTitle" value={gigTitle} onChange={(e) => setGigTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="gigDescription" className="form-label">Description du Gig</label>
          <textarea {...register('gigDescription')}className="form-control" id="gigDescription" rows="3" value={gigDescription} onChange={(e) => setGigDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="gigImage" className="form-label">Image du Gig</label>
          <input {...register('gigImage')}type="text" className="form-control" id="gigImage" value={gigImage} onChange={(e) => setGigImage(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="gigPrice" className="form-label">Prix du Gig</label>
          <input {...register('gigPrice')} type="number" className="form-control" id="gigPrice" value={gigPrice} onChange={(e) => setGigPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="gigDate" className="form-label">Date d'ajout</label>
          <input {...register('gigDate')} type="date" className="form-control" id="gigDate" value={gigDate} onChange={(e) => setGigPrice(e.target.value)} />
        </div>
        <div className="d-flex justify-content-between">
          {/* Utilisez Link pour créer un lien vers la première page */}
{/* Utilisez Link pour créer un lien vers la première page */}
            <button className="btn btn-success">Add</button>          
          <Link to="/DescriptionPage" className="btn btn-success">Back</Link> 
        </div>
      </form>
    </div>
  );
};

export default SecondPage;
