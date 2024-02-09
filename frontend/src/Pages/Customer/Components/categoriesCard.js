import webstieImage from "./imgs/website.webp";
import mobileDev from "./imgs/mobiledev.jpg";
import softwareDev from "./imgs/softwaredev.jpg";
import motionDesign from "./imgs/motionDesign.jpg";
import art from "./imgs/art.jpg";
import logo from "./imgs/logo.jpg";

export const CategoriesCard = (props) => {
  let categoryCard;

  console.log(props.Category);

  switch (props.Category) {
    case "Technology":
      categoryCard = [
        {
          title: "Web development",
          text: "Build stunning websites with code and creativity.",
          image: webstieImage,
        },
        {
          title: "Mobile development", // Changed from "name" to "title"
          text: "Craft innovative mobile apps for a connected world.",
          image: mobileDev,
        },
        {
          title: "Software development", // Changed from "name" to "title"
          text: "Craft innovative software solutions for a connected world.",
          image: softwareDev,
        },
      ];
      break;
    case "Graphics":
      categoryCard = [
        {
          title: "mothion design",
          text: "Transform static visuals into captivating narratives with the dynamic artistry of motion design",
          image: motionDesign,
        },

        {
          title: "Art",
          text: "Express your innermost thoughts and emotions through the limitless canvas of artistic creation",
          image: art,
        },
        {
          title: "Logo design",
          text: "Craft iconic symbols that speak volumes in simplicity – the essence of effective logo design",
          image: logo,
        },
      ];
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
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};
