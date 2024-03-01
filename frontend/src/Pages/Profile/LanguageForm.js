import React, { useState } from 'react';

export const LanguageForm= ({ onClose }) => {
  const [newLanguage, setNewLanguage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nouvelle language :', newLanguage);
    
    onClose(); 
  };

  const handleChange = (event) => {
    setNewLanguage(event.target.value);
  };

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">ajouter une language</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newDesc">Nouvelle language :</label>
            <input
              type="text"
              className="form-control"
              id="newUlanguage"
              value={newLanguage}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Ajouter</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  );
};
