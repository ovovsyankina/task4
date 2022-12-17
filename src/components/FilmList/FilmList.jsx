import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import { array, func, bool, string } from "prop-types";
import styles from "./FilmList.module.scss";

const FilmList = ({
  data,
  setModalViewportOpen,
  onModalEditOpen,
  isFavoritePage,
  page,
  favoriteData,
}) => {
  return (
    <div>
      <div className={styles.root}>
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
    </div>
  );
};

FilmList.propTypes = {
  data: array,
  setModalViewportOpen: func,
  onModalEditOpen: func,
  isFavoritePage: bool,
  page: string,
  favoriteData: array,
};

export default FilmList;
