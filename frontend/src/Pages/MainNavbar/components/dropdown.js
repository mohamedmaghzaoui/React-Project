import { Link } from "react-router-dom";
export const Dropdown = () => {
  return (
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
          <Link style={{ width: "200px" }} class="dropdown-item  " href="#">
            <span className="fw-medium">Projects</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our projects
            </span>
          </Link>
        </li>
        <li>
          <Link class="dropdown-item " href="#">
            <span className="fw-medium">freelancers</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our freelancers
            </span>
          </Link>
        </li>
        <li>
          <Link class="dropdown-item " href="#">
            <span className="fw-medium">Community</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our Community
            </span>
          </Link>
        </li>
        <li>
          <Link class="dropdown-item " href="#">
            <span className="fw-medium">Members</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our Members
            </span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
