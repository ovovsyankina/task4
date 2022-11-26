import React from "react";
import { Link } from "react-router-dom";
import { array, func, string } from "prop-types";

const SearchFilter = ({
  currentSearch,
  setCurrentSearch,
  onSearchFilm,
  searchValue,
  filteredFilm,
  onClearSearchInput,
}) => {
  return (
    <div>
      <input
        type="text"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button onClick={onClearSearchInput}>X</button>
      <Link to={`/films?search=${currentSearch}`}>
        <button onClick={onSearchFilm}>Поиск</button>
      </Link>
      {searchValue && searchValue.length > 0 && (
        <>
          {filteredFilm && filteredFilm.length > 0 ? (
            <div>Результат поиска по запросу "{searchValue}":</div>
          ) : (
            <div>
              К сожалению, по вашему запросу "{searchValue}" ничего не
              нашлось....
            </div>
          )}
        </>
      )}
    </div>
  );
};

SearchFilter.propTypes = {
  currentSearch: string,
  setCurrentSearch: func,
  onSearchFilm: func,
  filter: string,
  filteredFilm: array,
  onClearSearchInput: func,
};

export default SearchFilter;
