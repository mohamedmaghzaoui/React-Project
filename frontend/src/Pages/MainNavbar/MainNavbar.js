import "./MainNavbar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "./components/dropdown";
import Login from "../Home/Login/loginForm";
import { useState, useEffect } from "react";
import { ResponsiveButton } from "./components/responsiveButton";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    //begin navbar

    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <Link
            style={{ color: "#404145", fontSize: "30px" }}
            class="offset navbar-brand fw-bold text-success   "
            to="/"
          >
            FreeEz
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse fw-medium"
          >
            <ul
              style={{ fontSize: "18px " }}
              class="navbar-nav me-auto mb-2 mb-lg-0 offset-xl-7"
            >
              <Dropdown />
              <li class="nav-item">
                <Link class="nav-link  mx-3" href="#">
                  freelancer
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link mx-3" aria-current="page" href="#">
                  English
                </Link>
              </li>
              <li class="nav-item">
                <button
                  onClick={() => setIsOpen(true)}
                  style={{ color: "#D62929" }}
                  className=" nav-link mx-3  "
                >
                  login
                </button>
              </li>
              <Login open={isOpen} onClose={() => setIsOpen(false)}></Login>

              <li class="nav-item">
                <Link
                  class=" my-1 btn btn-outline-success fw-bold mx-3 "
                  aria-current="page"
                  href="./"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="m-0 " />
    </div>
  );
}

export default MainNavbar;
