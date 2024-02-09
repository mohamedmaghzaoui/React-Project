import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle mx-3"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Discover
      </Link>
      <ul className="dropdown-menu" style={{ width: "350px", marginTop: "10px" }}>
        <li>
          <Link className="dropdown-item" href="#">
            <span className="fw-medium">Projects</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our projects
            </span>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="#">
            <span className="fw-medium">Freelancers</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our freelancers
            </span>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="#">
            <span className="fw-medium">Community</span>
            <br />
            <span style={{ fontSize: "15px", color: "#62646A" }}>
              discover our Community
            </span>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" href="#">
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
