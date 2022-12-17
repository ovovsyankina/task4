import { func, string } from "prop-types";
import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
const HomePage = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
  page,
}) => {
  return (
    <div>
      <SearchFilterContainer page={page} />
      <button onClick={onModalAddOpen}>Добавить фильм</button>
      <FilmListContainer
        setModalViewportOpen={setModalViewportOpen}
        onModalEditOpen={onModalEditOpen}
        page={page}
      />
    </div>
  );
};

HomePage.propTypes = {
  onModalAddOpen: func,
  setModalViewportOpen: func,
  onModalEditOpen: func,
  page: string,
};
export default HomePage;
