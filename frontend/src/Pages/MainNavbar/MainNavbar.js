import "./MainNavbar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "./components/dropdown";
import Login from "../Home/Login/loginForm";
import Join from "../Home/Join/JoinForm";
import { useState, useEffect } from "react";
import { ResponsiveButton } from "./components/responsiveButton";


function MainNavbar() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenJoin, setIsOpenJoin] = useState(false);
  return (
    //begin navbar

    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary nav-c">
        <div class="container-fluid nav-c ">
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
                  onClick={() => setIsOpenLogin(true)}  
                  className=" nav-link mx-3  ">
                  login
                </button>
              </li>
              <Login openLogin={isOpenLogin} onCloseLogin={() => setIsOpenLogin(false)}></Login>


              <li class="nav-item">
                <button
                  onClick={() => setIsOpenJoin(true)}  
                  className="my-1 btn btn-outline-success fw-bold mx-3">
                  Join
                </button>
              </li>
              <Join openJoin={isOpenJoin} onCloseJoin={() => setIsOpenJoin(false)}></Join>

            </ul>
          </div>0
        </div>
      </nav>
      <hr className="m-0 " />
    </div>
  );
}

export default MainNavbar;
