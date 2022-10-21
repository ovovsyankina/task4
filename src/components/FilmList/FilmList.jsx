import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import ModalWindowContainer from "../ModalWindow/ModalWindowContainer";
import ScreenViewingContainer from "../ScreenViewing/ScreenViewingContainer";
import SearchFilterContainer from "../SearchFilter/SearchFilterContainer";
import styles from "./FilmList.module.scss";

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
            data={item}
            key={item.id}
            setModalViewportOpen={setModalViewportOpen}
            onModalEditOpen={onModalEditOpen}
          />
        ))}
        <ModalWindowContainer
          currentData={currentData}
          data={data}
          isModalAddEditOpen={isModalAddEditOpen}
          modalType={modalType}
          onModalAddEditClose={onModalAddEditClose}
        />
        <ModalViewportContainer
          currentData={currentData}
          isModalViewportOpen={isModalViewportOpen}
          setModalViewportOpen={setModalViewportOpen}
        />
      </ul>
    </div>
  );
};
export default FilmList;
