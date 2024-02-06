import "./MainNavbar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "./components/dropdown";
import { ResponsiveButton } from "./components/responsiveButton";

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
          <ResponsiveButton />

          <div class="collapse navbar-collapse fw-medium">
            <ul
              style={{ fontSize: "18px " }}
              class="navbar-nav me-auto mb-2 mb-lg-0 offset-xl-7"
            >
              <Dropdown />
              <li class="nav-item">
                <Link class="nav-link mx-3" href="#">
                  freelancer
                </Link>
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
