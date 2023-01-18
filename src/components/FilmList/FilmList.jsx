import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import { array, func, bool } from "prop-types";
import styles from "./FilmList.module.scss";

const FilmList = ({
  data,
  setModalViewportOpen,
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
          setModalViewportOpen={setModalViewportOpen}
          onModalEditOpen={onModalEditOpen}
          isHomePage={isHomePage}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  data: array,
  setModalViewportOpen: func,
  onModalEditOpen: func,
  onModalAddOpen: func,
  isHomePage: bool,
  favoriteData: array,
};

export default FilmList;
