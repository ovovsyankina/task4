import { func, string } from "prop-types";
import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import styles from "./HomePage.module.scss";
const HomePage = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
  page,
}) => {
  return (
    <div className={styles.root}>
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
