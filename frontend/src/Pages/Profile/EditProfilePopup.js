import React, { useState } from 'react';

export const EditProfilePopup = ({ onClose }) => {
  const [newUsername, setNewUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nouveau nom d\'utilisateur :', newUsername);
    onClose(); 
  };

  const handleChange = (event) => {
    setNewUsername(event.target.value);
  };

  return (
    <div className="popup-container">
      <div className="popup bg-light p-4">
        <h2 className="mb-4">Changer le nom d'utilisateur</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="newUsername">Nouveau nom d'utilisateur:</label>
            <input
              type="text"
              className="form-control"
              id="newUsername"
              value={newUsername}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Enregistrer</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Fermer</button>
        </form>
      </div>
    </div>
  );
};

