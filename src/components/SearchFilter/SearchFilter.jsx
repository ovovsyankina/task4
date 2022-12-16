import React from "react";
import { Link } from "react-router-dom";
import { array, func, string } from "prop-types";

const SearchFilter = ({
  currentSearch,
  setCurrentSearch,
  onSearchFilm,
  searchValue,
  onClearSearchInput,
  page,
}) => {
  return (
    <div>
      <input
        type="text"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button onClick={onClearSearchInput}>X</button>
      <Link
        to={
          page === "favorite"
            ? `/films/favorite?search=${currentSearch}`
            : `/films?search=${currentSearch}`
        }
      >
        <button onClick={onSearchFilm}>Поиск</button>
      </Link>
      {searchValue && searchValue.length > 0 && (
        <>
          {searchValue ? (
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

  onClearSearchInput: func,
};

export default SearchFilter;
