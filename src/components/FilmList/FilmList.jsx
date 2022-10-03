import React from "react";
import FilmItemContainer from "../FilmItemContainer/FilmItemContainer";
import ModalViewportContainer from "../ModalViewport/ModalViewportContainer";
import styles from "./FilmList.module.scss";

const FilmList = ({ data, currentData, modalViewport, setModalViewport }) => {
  console.log("tatas : ", data);
  return (
    <ul className={styles.root}>
      {data.map((item) => (
        <FilmItemContainer
          data={item}
          key={item.id}
          setModalViewport={setModalViewport}
        />
      ))}
      <ModalViewportContainer
        currentData={currentData}
        modalViewport={modalViewport}
        setModalViewport={setModalViewport}
      />
    </ul>
  );
};
export default FilmList;
