import { func } from "prop-types";
import React from "react";
import FilmListContainer from "../FilmList/FilmListContainer";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = ({ setQuickViewOpen, onModalEditOpen }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container_films}>
        <div className={styles.all_films}>
          <FilmListContainer
            isFavoritePage={true}
            setQuickViewOpen={setQuickViewOpen}
            onModalEditOpen={onModalEditOpen}
          />
        </div>
      </div>
    </div>
  );
};

FavoritesPage.propTypes = {
  setQuickViewOpen: func,
  onModalEditOpen: func,
};

export default FavoritesPage;
