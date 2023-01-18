import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import { array, func, bool } from "prop-types";
import styles from "./FilmList.module.scss";

const FilmList = ({
  data,
  setQuickViewOpen,
  onModalEditOpen,
  onModalAddOpen,
  isHomePage,
  favoriteData,
}) => {
  return (
    <div className={styles.root}>
      {isHomePage && (
        <button onClick={onModalAddOpen} className={styles.add_film}>
          <div className={styles.button_add_film_circle}>
            <div className={styles.button_add_film_plus}></div>
          </div>
        </button>
      )}

      {(!isHomePage ? favoriteData : data).map((item) => (
        <FilmItemContainer
          film={item}
          key={item.id}
          setQuickViewOpen={setQuickViewOpen}
          onModalEditOpen={onModalEditOpen}
          isHomePage={isHomePage}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  data: array,
  setQuickViewOpen: func,
  onModalEditOpen: func,
  onModalAddOpen: func,
  isHomePage: bool,
  favoriteData: array,
};

export default FilmList;
