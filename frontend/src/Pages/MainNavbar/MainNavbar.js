import { Link } from "react-router-dom";
import "./MainNavbar.css";

function MainNavbar() {
  return (
    <div>
      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />

        <div id="nav-header">
          <a id="nav-title" href="https://codepen.io" target="_blank">
            PR<i class="fab fa-codepen"></i>JEASY
          </a>
          <label for="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div class="nav-button">
            <i class="fas fa-palette"></i>
            <Link to={"/"}>Home</Link>
          </div>
          <div class="nav-button">
            <i class="fas fa-palette"></i>

            <Link to={"/Customer"}>Customer</Link>
          </div>
          <div class="nav-button">
            <i class="fas fa-palette"></i>

            <Link to={"/Customer"}>Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
