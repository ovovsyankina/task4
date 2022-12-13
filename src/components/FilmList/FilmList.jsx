import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import ModalWindowContainer from "../ModalWindow/ModalWindowContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import { array, object, func, bool, string } from "prop-types";
import styles from "./FilmList.module.scss";
import Header from "../Header/Header";

const FilmList = ({
  data,
  setModalViewportOpen,
  onModalEditOpen,
  isFavorite,
}) => {
  return (
    <div>
      <div className={styles.root}>
        {data.map((item) => (
          <FilmItemContainer
            film={item}
            key={item.id}
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
            isFavorite={isFavorite}
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
};

export default FilmList;
