import webstieImage from "./imgs/website.webp";
import mobileDev from "./imgs/mobiledev.jpg";
import softwareDev from "./imgs/softwaredev.jpg";

export const CategoriesCard = (props) => {
  const Technology = [
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
  const Graphics = [
    {
      title: "mothion design",
    },
  ];

  return (
    <div className="row">
      {Technology.map((card) => (
        <div className="card w-25 mx-5 col" key={card.title}>
          <img src={card.image} className="img-fluid" alt={card.title} />
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
