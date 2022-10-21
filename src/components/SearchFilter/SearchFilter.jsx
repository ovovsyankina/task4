import React from "react";

const SearchFilter = ({
  currentSearch,
  setCurrentSearch,
  onSearchFilm,
  filter,
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
      <button onClick={onSearchFilm}>Поиск</button>
      {filter && filter.length > 0 && (
        <>
          {filteredFilm && filteredFilm.length > 0 ? (
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
export default SearchFilter;
