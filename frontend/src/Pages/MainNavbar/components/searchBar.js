export const SearchBar = () => {
  return (
    <div>
      <form
        style={{ position: "fixed", marginTop: "-15px" }}
        class="d-flex col-4"
        role="search"
      >
        <input className="form-control " type="text" />
        <button class="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
