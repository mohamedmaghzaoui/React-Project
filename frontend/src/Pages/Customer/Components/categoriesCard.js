import { Technology } from "./category";
import { Graphics } from "./category";
import { Animations } from "./category";
import { Design } from "./category";
import { Link } from "react-router-dom";

export const CategoriesCard = (props) => {
  let categoryCard = Technology;

  console.log(props.Category);

  switch (props.Category) {
    case "Technology":
      categoryCard = Technology;
      break;
    case "Graphics":
      categoryCard = Graphics;
      break;
    case "Animation":
      categoryCard = Animations;
      break;
    case "Design":
      categoryCard = Design;
      break;
    default:
      break;
  }

  return (
    <div className="row  ">
      {categoryCard &&
        categoryCard.map((card) => (
          <div className="card border-0  mx-5 col" key={card.title}>
            <img src={card.image} className="img-fluid " alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <Link to="/gigs" className="btn btn-dark ">
                check
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
