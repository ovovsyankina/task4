import React from "react";
import { object, func, bool } from "prop-types";
import styles from "./ModalViewport.module.scss";

const ModalViewport = ({
  currentData,
  isModalViewportOpen,
  onModalWindowOff,
}) => {
  return (
    <>
      {isModalViewportOpen && (
        <div className={styles.root}>
          <div className={styles.modal_window}>
            <div>
              <p> Название фильма:</p> {currentData.title}
            </div>
            <div>
              <p>Описание:</p> {currentData.description}
            </div>
            <div>
              <p>Год создания:</p> {currentData.yearRelease}
            </div>
            <div>
              <p>Обложка:</p>
              <img
                src={currentData.image}
                className={styles.film_cover}
                alt="film cover"
              />
            </div>
            <button onClick={onModalWindowOff}>ВЫЙТИ ИЗ ПРОСМОТРА</button>
          </div>
        </div>
      )}
    </>
  );
};

ModalViewport.propTypes = {
  currentData: object,
  isModalViewportOpen: bool,
  onModalWindowOff: func,
};
export default ModalViewport;
