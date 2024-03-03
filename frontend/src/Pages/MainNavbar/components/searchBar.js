export const SearchBar = () => {
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-1 col-9"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
