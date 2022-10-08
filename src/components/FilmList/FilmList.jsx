import React from "react";
import FilmItemContainer from "../FilmItem/FilmItemContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import ModalWindowContainer from "../ModalWindow/ModalWindowContainer";
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
}) => {
  console.log("datas : ", data);
  return (
    <div>
      <button onClick={onModalAddOpen}>Добавить фильм</button>
      <ul className={styles.root}>
        {data.map((item) => (
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
