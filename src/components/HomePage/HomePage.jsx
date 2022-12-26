import React from "react";
import { func, string } from "prop-types";
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
      <div className={styles.container_films}>
        <div className={styles.all_films}>
          <FilmListContainer
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
            onModalAddOpen={onModalAddOpen}
            page={page}
          />
        </div>
      </div>
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
