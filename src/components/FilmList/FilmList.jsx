import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import { array, func, bool, string } from "prop-types";
import styles from "./FilmList.module.scss";

const FilmList = ({
  data,
  setModalViewportOpen,
  onModalEditOpen,
  onModalAddOpen,
  isFavoritePage,
  page,
  favoriteData,
}) => {
  return (
    <div className={styles.root}>
      {page === "all" ? (
        <button onClick={onModalAddOpen} className={styles.add_film}>
          <div className={styles.button_add_film_circle}>
            <div className={styles.button_add_film_plus}></div>
          </div>
        </button>
      ) : (
        ""
      )}

      {(page === "favorite" ? favoriteData : data).map((item) => (
        <FilmItemContainer
          film={item}
          key={item.id}
          setModalViewportOpen={setModalViewportOpen}
          onModalEditOpen={onModalEditOpen}
          isFavoritePage={isFavoritePage}
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
  isFavoritePage: bool,
  page: string,
  favoriteData: array,
};

export default FilmList;
