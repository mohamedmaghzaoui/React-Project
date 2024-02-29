import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import "./FavoriteButton.css"; // Assurez-vous d'importer la feuille de style CSS
import "bootstrap/dist/css/bootstrap.min.css";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingList, setEditingList] = useState(null);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const addList = () => {
    const newList = {
      id: Date.now(),
      name: newListName || "Nouvelle Liste",
      description: newListDescription,
      content: [],
      image: "https://i0.wp.com/dordogne-ici-et-la.com/wp-content/uploads/2016/01/rubrique-image-vide.jpg?ssl=1", // Utilisation de l'URL fournie
    };
    setLists((prevLists) => [...prevLists, newList]);
    setNewListName("");
    setNewListDescription("");
    handleClose();
  };

  const editList = (id) => {
    const listToEdit = lists.find((list) => list.id === id);
    setEditingList(listToEdit);
    setNewListName(listToEdit.name);
    setNewListDescription(listToEdit.description);
    handleShow();
  };

  const updateList = () => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === editingList.id
          ? { ...list, name: newListName, description: newListDescription }
          : list
      )
    );
    setEditingList(null);
    setNewListName("");
    setNewListDescription("");
    handleClose();
  };

  const deleteList = (id) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id));
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditingList(null);
  };

  return (
    <div className="favorite-container">
      <div className="button-container">
   
        <button
          style={{ position: "absolute", left: "90%" }}
          className="btn btn-success"
          onClick={handleShow}
        >
         Creer un liste
         
        </button>
        <h1>Mes favoris</h1>
        {isFavorite && <p>Ce contenu est dans vos favoris!</p>}
        <h2>Listes existantes :</h2>
        
      </div>
    

      <div className="text-container">
       

       

        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {editingList ? "Modifier une liste" : "Créer une nouvelle liste"}
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Form>
              <Form.Group controlId="formListName">
                <Form.Label>Nom de la liste</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ma première liste"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formListDescription">
                <Form.Label>Description (facultatif)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Par exemple, « De bons designers pour nos campagnes de marketing »."
                  value={newListDescription}
                  onChange={(e) => setNewListDescription(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant="success"
              onClick={editingList ? updateList : addList}
            >
              {editingList ? "Modifier" : "Créer une liste"}
            </Button>
          </Modal.Footer>
        </Modal>


        <div className="card-container d-flex flex-wrap">
          {lists.map((list) => (
            <Card key={list.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={list.image} />
              <Card.Body>
                <Card.Title>{list.name}</Card.Title>
                <Card.Text>{list.description}</Card.Text>
                <Button
                  onClick={() => editList(list.id)}
                  className="btn btn-success"
                >
                  Modifier
                </Button>
                <Button
                  onClick={() => deleteList(list.id)}
                  className="btn btn-success"
                >
                  Supprimer
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteButton;
