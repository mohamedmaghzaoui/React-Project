import React, { useState } from 'react';

export const Desc = ({ onClose }) => {
  const [newDesc, setNewDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nouvelle description :', newDesc);
    onClose(); 
  };

  const handleChange = (event) => {
    setNewDesc(event.target.value);
  };

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">Changer la description</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newDesc">Nouvelle description :</label>
            <textarea
              className="form-control"
              id="newDesc"
              value={newDesc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mr-2">Enregistrer</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  );
};
