import React from "react";
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
    <div>
      <input
        type="text"
        value={currentSearch}
        onChange={onChangeInput}
        onKeyDown={onSearchFilmEnter}
      />
      <button onClick={onClearSearchInput}>X</button>

      <button onClick={onSearchFilm}>Поиск</button>

      {filter && filter.length > 0 && (
        <>
          {(page === "all" && data.length > 0) ||
          (page === "favorite" && favoriteData.length > 0) ? (
            <div>Результат поиска по запросу "{filter}":</div>
          ) : (
            <div>
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
