import { func } from "prop-types";
import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = ({ setModalViewportOpen, onModalEditOpen }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container_films}>
        <div className={styles.all_films}>
          <FilmListContainer
            isFavoritePage={true}
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
          />
        </div>
      </div>
    </div>
  );
};

FavoritesPage.propTypes = {
  setModalViewportOpen: func,
  onModalEditOpen: func,
};

export default FavoritesPage;
