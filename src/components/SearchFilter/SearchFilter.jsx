import React from "react";
import styles from "./SearchFilter.module.scss";
import { array, func, string } from "prop-types";

const SearchFilter = ({
  currentSearch,
  onSearchFilm,
  filter,
  onClearSearchInput,
  page,
  favoriteData,
  data,
  onSearchFilmEnter,
  onChangeInput,
}) => {
  return (
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
          {(page === "all" && data.length > 0) ||
          (page === "favorite" && favoriteData.length > 0) ? (
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
  );
};

SearchFilter.propTypes = {
  currentSearch: string,
  onSearchFilm: func,
  filter: string,
  onClearSearchInput: func,
  page: string,
  favoriteData: array,
  data: array,
  onSearchFilmEnter: func,
  onChangeInput: func,
};

export default SearchFilter;
