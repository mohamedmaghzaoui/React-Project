import styles from "./MainNavbar.module.css";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    //begin navbar

    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <Link
            style={{ color: "#404145", fontSize: "30px" }}
            class="navbar-brand fw-bold  "
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
            class="collapse navbar-collapse fw-medium"
            id="navbarSupportedContent"
          >
            <ul
              style={{ fontSize: "18px" }}
              class="navbar-nav me-auto mb-2 mb-lg-0 offset-7"
            >
              <li class="nav-item">
                <Link class="nav-link mx-3" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle mx-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item " href="#">
                      <span className="fw-medium">Projects</span>
                      <br />
                      <span style={{ fontSize: "15px", color: "#62646A" }}>
                        discover our projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item " href="#">
                      <span className="fw-medium">Projects</span>
                      <br />
                      <span style={{ fontSize: "15px", color: "#62646A" }}>
                        discover our projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item " href="#">
                      <span className="fw-medium">Projects</span>
                      <br />
                      <span style={{ fontSize: "15px", color: "#62646A" }}>
                        discover our projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item " href="#">
                      <span className="fw-medium">Projects</span>
                      <br />
                      <span style={{ fontSize: "15px", color: "#62646A" }}>
                        discover our projects
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-3" aria-current="page" href="#">
                  English
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mx-3" aria-current="page" href="#">
                  Log in
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class=" my-1 btn btn-outline-success fw-bold mx-3 "
                  aria-current="page"
                  href="#"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
