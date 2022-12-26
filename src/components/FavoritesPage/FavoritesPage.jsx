import { func, string } from "prop-types";
import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = ({ setModalViewportOpen, onModalEditOpen, page }) => {
  return (
    <div className={styles.root}>
      <SearchFilterContainer page={page} />
      <div className={styles.container_films}>
        <div className={styles.all_films}>
          <FilmListContainer
            isFavoritePage={true}
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};

FavoritesPage.propTypes = {
  setModalViewportOpen: func,
  onModalEditOpen: func,
  page: string,
};

export default FavoritesPage;
