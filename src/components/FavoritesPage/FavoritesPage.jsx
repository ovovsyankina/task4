import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
const FavoritesPage = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  return (
    <div>
      <div>
        {/* <SearchFilterContainer filteredFilm={filteredFilm} /> */}
        <button onClick={onModalAddOpen}>Добавить фильм</button>
        <FilmListContainer
          isFavorite={true}
          setModalViewportOpen={setModalViewportOpen}
          onModalEditOpen={onModalEditOpen}
        />
      </div>
    </div>
  );
};
export default FavoritesPage;
