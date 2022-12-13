import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
const HomePage = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  return (
    <div>
      {/* <SearchFilterContainer filteredFilm={filteredFilm} /> */}
      <button onClick={onModalAddOpen}>Добавить фильм</button>
      <FilmListContainer
        setModalViewportOpen={setModalViewportOpen}
        onModalEditOpen={onModalEditOpen}
      />
    </div>
  );
};
export default HomePage;
