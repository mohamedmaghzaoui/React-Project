import { Link } from 'react-router-dom';
import './MainNavbar.css';


function MainNavbar() {
    return <div>
        

        <div id="nav-bar">
  <input id="nav-toggle" type="checkbox"/>
  

  <div id="nav-header"><a id="nav-title" href="https://codepen.io" target="_blank">PR<i class="fab fa-codepen"></i>JEASY</a>
    <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
    <hr/>
  </div>
  <div id="nav-content">
    
    <Link to={"/customer"}>
    
    <div class="nav-button"><i class="fas fa-palette"></i><span>Customer</span></div>
    </Link>
    
    <div class="nav-button"><i class="fas fa-images"></i><span>Assets</span></div>
    <div class="nav-button"><i class="fas fa-thumbtack"></i><span>Pinned Items</span></div>
    <hr/>
    <div class="nav-button"><i class="fas fa-heart"></i><span>Following</span></div>
    <div class="nav-button"><i class="fas fa-chart-line"></i><span>Trending</span></div>
    <div class="nav-button"><i class="fas fa-fire"></i><span>Challenges</span></div>
    <div class="nav-button"><i class="fas fa-magic"></i><span>Spark</span></div>
    <hr/>
    <div class="nav-button"><i class="fas fa-gem"></i><span>Codepen Pro</span></div>
    <div id="nav-content-highlight"></div>
  </div>
  <input id="nav-footer-toggle" type="checkbox"/>
  <div id="nav-footer">
    <div id="nav-footer-heading">
      <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"/></div>
      <div id="nav-footer-titlebox"><a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">uahnbu</a><span id="nav-footer-subtitle">Admin</span></div>
      <label for="nav-footer-toggle"><i class="fas fa-caret-up"></i></label>
    </div>
    <div id="nav-footer-content">
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

         




    </div>
}


export default MainNavbar;