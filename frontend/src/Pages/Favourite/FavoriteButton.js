import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form, Card } from "react-bootstrap";

import "./FavoriteButton.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [newListDescription, setNewListDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingList, setEditingList] = useState(null);

  // Load lists from localStorage on component mount
  useEffect(() => {
    const storedLists = localStorage.getItem("favoriteLists");
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    }
  }, []);

  const saveListsToLocalStorage = (updatedLists) => {
    localStorage.setItem("favoriteLists", JSON.stringify(updatedLists));
  };

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const submitData = (data) => {
    console.log(data);
  };

  const addList = () => {
    const newList = {
      id: Date.now(),
      name: newListName || "Nouvelle Liste",
      description: newListDescription,
      content: [],
      image: selectedImage
        ? URL.createObjectURL(selectedImage)
        : "https://i0.wp.com/dordogne-ici-et-la.com/wp-content/uploads/2016/01/rubrique-image-vide.jpg?ssl=1",
    };
    const updatedLists = [...lists, newList];
    setLists(updatedLists);
    saveListsToLocalStorage(updatedLists);

    setNewListName("");
    setNewListDescription("");
    setSelectedImage(null);
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
    const updatedLists = lists.map((list) =>
      list.id === editingList.id
        ? {
            ...list,
            name: newListName,
            description: newListDescription,
            image: selectedImage
              ? URL.createObjectURL(selectedImage)
              : list.image,
          }
        : list
    );
    setLists(updatedLists);
    saveListsToLocalStorage(updatedLists);

    setEditingList(null);
    setNewListName("");
    setNewListDescription("");
    setSelectedImage(null);
    handleClose();
  };

  const deleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
    saveListsToLocalStorage(updatedLists);
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditingList(null);
  };
  const { register, handleSubmit } = useForm();

  return (
    <div className="favorite-container">
      <div className="button-container">
        <button
          style={{ position: "absolute", left: "90%" }}
          className="btn btn-success"
          onClick={handleShow}
        >
          Créer une liste
        </button>

        <h1 className="text-start">Mes favoris</h1>

        <div className="row">
          <div className="col-20">
            <p className="text-start">Organisez vos freelances préférés et vos services favoris dans</p>
            <p className="text-start">des listes personnalisées auxquelles vous pouvez facilement</p>
            <p className="text-start">accéder et que vous pouvez partager avec votre équipe.</p>
          </div>
        </div>

        <h2 className="text-start">Listes existantes :</h2>
      </div>

      <div className="text-container">
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {editingList ? "Modifier une liste" : "Créer une nouvelle liste"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit(submitData)}>
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
                  {...register("Description")}
                  as="textarea"
                  rows={3}
                  placeholder="Par exemple, « De bons designers pour nos campagnes de marketing »."
                  value={newListDescription}
                  onChange={(e) => setNewListDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
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
              <Card.Img variant="top" src={list.image} alt="List Image" />
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
