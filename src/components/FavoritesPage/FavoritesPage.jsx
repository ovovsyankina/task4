import { func, string } from "prop-types";
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

FavoritesPage.propTypes = {
  onModalAddOpen: func,
  setModalViewportOpen: func,
  onModalEditOpen: func,
  page: string,
};
export default FavoritesPage;
