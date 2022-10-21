import React from "react";

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
          <img src={currentData.image} />
        </div>
        <button onClick={onCloseScreenViewing}>ВЫЙТИ ИЗ ПРОСМОТРА</button>
      </div>
    </div>
  );
};
export default ScreenViewing;
