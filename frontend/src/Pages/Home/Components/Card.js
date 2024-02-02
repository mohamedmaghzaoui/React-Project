export const Cards = () => {
  return (
    <div className="position-absolute" style={{ left: "15%", top: "87%" }}>
      {[
        "Web design",
        "Programmation",
        "Animation vidéo",
        "Rédaction",
        "Photographie",
        "Audio",
      ].map((index) => (
        <button
          key={index}
          className="btn btn-outline-danger mx-2"
          style={{
            cursor: "pointer",
            color: "white",
          }}
        >
          {index}
        </button>
      ))}
    </div>
  );
};
