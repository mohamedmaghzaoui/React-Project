import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "./components/dropdown";
import Login from "../Home/Login/loginForm";
import Join from "../Home/Join/JoinForm";
import { SearchBar } from "./components/searchBar.js";
import Language from "./components/LanguagePopup.js"; // corrected import
import { UserContext } from "../../Contexts/userContext.js";
import axios from "axios";

function MainNavbar() {
  //states
  const [isOpenLogin, setIsOpenLogin] = useState(false); //login form pop
  const [isOpenJoin, setIsOpenJoin] = useState(false); //join or sign in form pop
  const [showLanguagePop, setShowLanguagePop] = useState(false); //language
  const location = useLocation();

  const showSearchBar = location.pathname !== "/"; // Condition to hide on the homepage
  //get suername with useContext
  const { username, setUsername } = useContext(UserContext);
  //logout function
  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/logout");
    } catch (error) {
      setUsername(""); //symfony will return error when calling this route with axios
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-c">
        <div className="container-fluid nav-c">
          <Link
            style={{ color: "#404145", fontSize: "30px" }}
            className="offset navbar-brand fw-bold text-success"
            to="/"
          >
            FreeEz
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {showSearchBar && ( // Conditionally render search bar
            <SearchBar />
          )}
          <span className="mx-5">{username}</span>
          {username ? (
            <button onClick={() => logout()} className="btn btn-danger">
              logout
            </button>
          ) : (
            <span className="mx-5"></span>
          )}

          <div
            id="navbarSupportedContent"
            className="collapse navbar-collapse fw-medium"
          >
            <ul
              style={{ fontSize: "18px" }}
              className="navbar-nav me-auto mb-2 mb-lg-0 offset-xl-6"
            >
              <Dropdown />
              <li className="nav-item">
                <Link className="nav-link  mx-3" href="#">
                  Freelancer
                </Link>
              </li>

              <li className="nav-item">
                <button
                  onClick={() => setShowLanguagePop(!showLanguagePop)}
                  className="nav-link mx-3"
                >
                  Language
                </button>
              </li>
              <Language
                openPop={showLanguagePop} // Corrected prop name
                onClosePop={() => setShowLanguagePop(false)}
              />

              <li className="nav-item">
                <button
                  onClick={() => setIsOpenLogin(!isOpenLogin)}
                  className="nav-link mx-3"
                >
                  Login
                </button>
              </li>
              <Login
                openLogin={isOpenLogin}
                onCloseLogin={() => setIsOpenLogin(false)}
              />

              <li className="nav-item">
                <button
                  onClick={() => setIsOpenJoin(!isOpenJoin)}
                  className="my-1 btn btn-outline-success fw-bold mx-3"
                >
                  Join
                </button>
              </li>
              <Join
                openJoin={isOpenJoin}
                onCloseJoin={() => setIsOpenJoin(false)}
              />
            </ul>
          </div>
        </div>
      </nav>
      <hr className="m-0" />
    </div>
  );
}

export default MainNavbar;
