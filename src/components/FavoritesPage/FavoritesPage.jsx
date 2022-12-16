import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
const FavoritesPage = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
  page,
}) => {
  return (
    <div>
      <div>
        <SearchFilterContainer page={page} />
        <button onClick={onModalAddOpen}>Добавить фильм</button>
        <FilmListContainer
          isFavoritePage={true}
          setModalViewportOpen={setModalViewportOpen}
          onModalEditOpen={onModalEditOpen}
          page={page}
        />
      </div>
    </div>
  );
};
export default FavoritesPage;
