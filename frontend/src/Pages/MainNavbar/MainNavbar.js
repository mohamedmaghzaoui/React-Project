import { Link } from "react-router-dom";
import "./MainNavbar.css";
import { FaHome, FaBell, FaBriefcase } from "react-icons/fa";

function MainNavbar() {
  return (
    <div>
      <div id="navbar" className=" position-absolute top-0 start-0 h-100 px-5">
        <div>
          <Link className="link" to={"/"}>
            <span className="line py-1 "></span>
            <FaHome className="my-4 " style={{ color: "#D62929" }} size={30} />
          </Link>
        </div>

        <div>
          <Link className="link" to={"/Customer"}>
            <span className="line py-1 "></span>
            <FaBriefcase
              className="my-4 "
              style={{ color: "#D62929" }}
              size={30}
            />
          </Link>

          <br />
        </div>
        <div>
          <Link className="link" to={"/"}>
            <span className="line py-1 "></span>
            <FaBell className="my-4 " style={{ color: "#D62929" }} size={30} />
          </Link>

          <br />
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
