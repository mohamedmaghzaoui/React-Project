import styles from "../customer.module.css";
export const Categories = () => {
  const categories = [
    "Technology ",
    "Graphics",
    "Marketing",
    "Animation",
    "Video",
    "Buisness",
    "Music",
    "Ai service",
  ];
  return (
    <div className="py-2 mx-5 px-5 ">
      {categories.map((value) => {
        return (
          <span
            id={styles.category}
            style={{ cursor: "pointer" }}
            className=" px-4 fs-5"
          >
            {value}
          </span>
        );
      })}
    </div>
  );
};
