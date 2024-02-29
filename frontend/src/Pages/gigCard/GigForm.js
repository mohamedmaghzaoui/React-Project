import React, { useState } from 'react';
import './gigForm.module.css';

const AddGigForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Créer un objet contenant les données du formulaire
    const gigData = { title, description, image };

    try {
      // Envoyer les données au backend via une requête HTTP (par exemple, avec fetch)
      const response = await fetch('URL_DU_BACKEND/api/gigs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gigData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la Gig Card');
      }

      // Réinitialiser les champs du formulaire après l'ajout
      setTitle('');
      setDescription('');
      setImage('');

      // Optionnel : afficher un message de succès ou effectuer d'autres actions nécessaires
      alert('Gig Card ajoutée avec succès!');
    } catch (error) {
      console.error('Erreur:', error.message);
      // Optionnel : afficher un message d'erreur à l'utilisateur
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} id='addGig'>
      <div id='form'>
        <label id='l1'>Titre:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div id='form'>
        <label  id='l2'>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>
      <div id='form'>
        <label id='l3'>Image (URL):</label>
        <input type="text" value={image} onChange={handleImageChange} />
      </div>
      <button type="submit" id='submit'>Ajouter</button>
    </form>
  );
};

export default AddGigForm;
