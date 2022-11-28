import React from "react";
import styles from "./SearchFilter.module.scss";
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
    <div className={styles.root}>
      <input
        type="text"
        value={currentSearch}
        className={styles.search_input}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button onClick={onClearSearchInput} className={styles.clear_input}>
        X
      </button>
      <Link to={`/films?search=${currentSearch}`}>
        <button onClick={onSearchFilm} className={styles.search_button}>
          Поиск
        </button>
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
