import React, { useState } from "react";
import { GoSearch, GoHeart, GoMail, GoBell, GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import "./NewNavbar.css";

const SearchForm = () => (
  <form className="form-inline mx-auto">
    <div className="input-group">
      <input className="form-control" type="search" placeholder="Quel service rechercheriez-vous aujourd'hui?" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-success btn-icon" type="submit" data-toggle="tooltip" data-bs-tooltip="Rechercher"><GoSearch /></button>
      </div>
    </div>
  </form>
);

const WelcomeDropdownItem = () => (
  <li>
    <Link className="dropdown-item" to="#">
      <span className="fw-medium">hello<br /><span style={{ fontSize: "15px", color: "#62646A" }}>Découvrez notre plateforme</span></span>
    </Link>
  </li>
);

const NewNavbar = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenJoin, setIsOpenJoin] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">FreeEz</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchForm />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle mx-3 text-dark" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Commandes</Link>
              <div className="dropdown-menu"><WelcomeDropdownItem /></div>
            </li>
            {[GoHeart, GoMail, GoBell, GoPerson].map((Icon, index) => (
              <li className="nav-item" key={index}>
                <button className="btn btn-icon" type="button" data-toggle="tooltip" data-bs-tooltip={['Cœur', 'Messagerie', 'Cloche', 'Profil'][index]}>
                  <Icon />
                </button>
              </li>
            ))}
          </ul>
          {isOpenLogin && <LoginModal onClose={() => setIsOpenLogin(false)} />}
          {isOpenJoin && <JoinModal onClose={() => setIsOpenJoin(false)} />}
        </div>
      </div>
    </nav>
  );
};

const Modal = ({ onClose, children }) => (
  <div className="modal">
    <button onClick={onClose}>Fermer</button>
    {children}
  </div>
);

const LoginModal = ({ onClose }) => <Modal onClose={onClose}>Content for the login modal</Modal>;

const JoinModal = ({ onClose }) => <Modal onClose={onClose}>Content for the join modal</Modal>;

export default NewNavbar;
