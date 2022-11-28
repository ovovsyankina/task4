import React from "react";
import styles from "./ScreenViewing.module.scss";
import { object, func } from "prop-types";

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
          <img src={currentData.image} alt="film cover" />
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
