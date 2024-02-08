//cards component
export const Cards = () => {
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
