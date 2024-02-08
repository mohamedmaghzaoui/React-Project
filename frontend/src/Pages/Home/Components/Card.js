//cards component
import { useNavigate } from "react-router-dom";
export const Cards = () => {
  const navigate = useNavigate();

  //cards array
  const arrayCards = [
    "Web design",
    "web development",
    "Photographie",
    "Marketing",
  ];
  return (
    <div className="py-1 ">
      {arrayCards.map((value) => (
        <button
          onClick={() => navigate("/Customer")}
          key={value}
          type="button"
          className="rounded-pill btn btn-outline-light mx-1"
        >
          {value}
        </button>
      ))}
    </div>
  );
};
