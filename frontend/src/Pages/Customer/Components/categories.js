import { useState } from "react";
//styles using css module
import styles from "../customer.module.css";
import { CategoriesCard } from "./categoriesCard";
export const Categories = () => {
  //dynamic category change
  const [Category, setCategory] = useState("Chose your Category");
  //category lisy
  const categories = ["Technology", "Graphics", "Animation", "Design"];
  return (
    <div>
      <div className="mx-xl-5 px-xl-5 row  ">
        {categories.map((value) => {
          return (
            <span
              //change category onclick
              onClick={() => setCategory(value)}
              id={styles.category}
              style={{ cursor: "pointer" }}
              className=" col-xl col-lg col-3 px-xl-2 fs-5"
            >
              {value}
            </span>
          );
        })}
      </div>
      <hr />
      <div
        style={{ width: "82%" }}
        className="my-4  offset-1 py-4"
        id={styles.name}
      >
        <p className="fs-2 text-light fw-bold text-center p-0 m-0 ">
          {Category}
        </p>
        <p className="fs-4 text-light  text-center ">
          Make a choice and stand out
        </p>
        <div className="text-center">
          <button className="btn btn-outline-light fw-semibold  ">
            Discover Out Site
          </button>
        </div>
        <br />
      </div>
      ;
      <CategoriesCard Category={Category} />
    </div>
  );
};
