import React from "react";
import styles from "./ScreenViewing.module.scss";
import { object, func } from "prop-types";
import { verifyUrlImage } from "../../utils";
import defaultImageFilm from "../../utils/defaultImageFilm.jpeg";

const ScreenViewing = ({ currentData, onCloseScreenViewing }) => {
  return (
    <div>
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
          <img
            src={
              verifyUrlImage(currentData.image)
                ? currentData.image
                : defaultImageFilm
            }
            alt="film cover"
          />
        </div>
        <button onClick={onCloseScreenViewing}>ВЫЙТИ ИЗ ПРОСМОТРА</button>
      </div>
    </div>
  );
};

ScreenViewing.propTypes = {
  currentData: object,
  onCloseScreenViewing: func,
};

export default ScreenViewing;
