import React from "react";
import styles from "./SearchBar.module.scss";
import { array, func, string, bool } from "prop-types";

const SearchBar = ({
  currentSearch,
  onSearchFilm,
  filter,
  onClearSearchInput,
  favoriteData,
  data,
  onSearchFilmEnter,
  onChangeInput,
  isHomePage,
  currentFilmView,
}) => {
  return (
    !currentFilmView && (
      <div className={styles.root}>
        <div className={styles.search_bar}>
          <input
            type="text"
            value={currentSearch}
            onChange={onChangeInput}
            onKeyDown={onSearchFilmEnter}
            className={styles.search_input}
          />
          <button
            onClick={onClearSearchInput}
            className={styles.search_input_clear}
          ></button>

          <button onClick={onSearchFilm} className={styles.search_button}>
            Поиск
          </button>
        </div>
        {filter && filter.length > 0 && (
          <>
            {(isHomePage && data.length > 0) ||
            (!isHomePage && favoriteData.length > 0) ? (
              <div className={styles.searsh_result}>
                Результат поиска по запросу "{filter}":
              </div>
            ) : (
              <div className={styles.searsh_result}>
                К сожалению, по вашему запросу "{filter}" ничего не нашлось....
              </div>
            )}
          </>
        )}
      </div>
    )
  );
};

SearchBar.propTypes = {
  currentSearch: string,
  onSearchFilm: func,
  filter: string,
  onClearSearchInput: func,
  isHomePage: bool,
  favoriteData: array,
  data: array,
  onSearchFilmEnter: func,
  onChangeInput: func,
  currentFilmView: bool,
};

export default SearchBar;
