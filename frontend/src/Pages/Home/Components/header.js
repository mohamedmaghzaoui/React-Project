import { FaSearch } from "react-icons/fa";
import styles from "../Css/home.module.css";
export const Header = () => {
  return (
    <div className="container row ">
      <div
        style={{ left: "22%", top: "8%" }}
        className="position-absolute translate-middle container-fluid col-xl-5 col-lg-5 row"
      >
        <div className="col-xl-7 col-lg-7 col-12 p-0 m-0">
          <input
            id={styles.search}
            type="text"
            placeholder="Rechercher quelque chose"
            name="name"
            className="form-control text-light fw-bold border-0"
          ></input>
        </div>
        <div
          style={{ backgroundColor: "#D62929" }}
          className="col-3  p-0 m-0 rounded-pill "
        >
          <FaSearch
            id={styles.icon}
            className="w-100 my-2  "
            style={{
              cursor: "pointer",
              color: "white",
              // Adjust this value to increase/decrease height
            }}
            size={30}
          />
        </div>
      </div>
      <div
        className="  position-absolute col-xl-8  col-lg-8 "
        style={{ top: "3.5%", left: "40%" }}
      >
        <button
          style={{ color: "#D62929" }}
          className=" col-lg-2 col-1  fw-bold btn btn-light btn-lg  "
        >
          S'identifier
        </button>
        <button className="text-light-emphasis mx-5 fw-bold btn btn-outline-danger btn-lg">
          Creer compte
        </button>
      </div>
    </div>
  );
};
