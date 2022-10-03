import React from "react";

import styles from "./ModalWindow.module.scss";
const ModalWindow = ({
  showModalWindow,
  onModalWindowOn,
  onModalWindowOff,
  addNewDataFilm,
  dataFilm,
  onChangeInput,
  handleFile,
}) => {
  return (
    <div>
      <button onClick={onModalWindowOn}>Добавить фильм</button>
      <form className={styles.form}>
        {showModalWindow && (
          <div className={styles.modal_content}>
            <button onClick={onModalWindowOff}>X</button>
            Название Фильма
            <input
              type="text"
              value={dataFilm.title}
              onChange={(e) => onChangeInput(e, "title")}
            />
            Описание Фильма
            <input
              type="text"
              value={dataFilm.description}
              onChange={(e) => onChangeInput(e, "description")}
            />
            Год создания:
            <input
              type="number"
              value={dataFilm.yearRelease}
              onChange={(e) => onChangeInput(e, "yearRelease")}
            />
            Загрузить обложку фильма:
            <input type="file" name="myImage" onChange={(e) => handleFile(e)} />
            <button onClick={addNewDataFilm}>Добавить</button>
          </div>
        )}
      </form>
    </div>
  );
};
export default ModalWindow;
