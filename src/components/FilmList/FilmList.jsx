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
  currentData,
  isModalViewportOpen,
  setModalViewportOpen,
  isModalAddEditOpen,
  modalType,
  onModalAddOpen,
  onModalEditOpen,
  onModalAddEditClose,
  filteredFilm,
}) => {
  return (
    <div>
      <SearchFilterContainer filteredFilm={filteredFilm} />
      <button onClick={onModalAddOpen}>Добавить фильм</button>
      <ul className={styles.root}>
        {filteredFilm.map((item) => (
          <FilmItemContainer
            film={item}
            key={item.id}
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
          />
        ))}
      </ul>
      <ModalWindowContainer
        currentData={currentData}
        isModalAddEditOpen={isModalAddEditOpen}
        modalType={modalType}
        onModalAddEditClose={onModalAddEditClose}
      />
      <ModalViewportContainer
        currentData={currentData}
        isModalViewportOpen={isModalViewportOpen}
        setModalViewportOpen={setModalViewportOpen}
      />
    </div>
  );
};

FilmList.propTypes = {
  data: array,
  currentData: object,
  isModalViewportOpen: bool,
  setModalViewportOpen: func,
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddOpen: func,
  onModalEditOpen: func,
  onModalAddEditClose: func,
  filteredFilm: array,
};

export default FilmList;
