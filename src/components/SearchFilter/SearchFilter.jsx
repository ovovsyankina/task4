import React from "react";

const SearchFilter = ({ currentSearch, setCurrentSearch, onSearchFilm }) => {
  return (
    <div>
      <input
        type="text"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button onClick={onSearchFilm}>Поиск</button>
    </div>
  );
};
export default SearchFilter;
