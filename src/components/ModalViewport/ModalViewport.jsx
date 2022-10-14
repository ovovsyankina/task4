import React from "react";
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
          <div>
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
              <img src={currentData.image} className={styles.film_cover} />
            </div>
            <button onClick={onModalWindowOff}>ВЫЙТИ ИЗ ПРОСМОТРА</button>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalViewport;
