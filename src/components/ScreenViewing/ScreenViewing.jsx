import React from "react";
import styles from "./ScreenViewing.module.scss";
import { object, func } from "prop-types";
import { verifyUrlImage } from "../../utils";
import defaultImageFilm from "../../utils/defaultImageFilm.jpeg";

const ScreenViewing = ({ currentData, onCloseScreenViewing }) => {
  return (
    <div className={styles.root}>
      <div className={styles.film_container}>
        <div className={styles.header_info_film}>
          Информация о фильме:
          <div>&laquo;{currentData.title}&raquo;</div>
        </div>
        <div className={styles.film_contents_fields}>
          <div className={styles.field_image_container}>
            <p className={styles.field_name}>Обложка фильма:</p>
            <img
              src={
                verifyUrlImage(currentData.image)
                  ? currentData.image
                  : defaultImageFilm
              }
              alt="film cover"
              className={styles.field_image}
            />
          </div>
          <div className={styles.film_contents}>
            <div className={styles.field_name_title}>
              <div className={styles.field_name}> Название фильма: </div>
              <div className={styles.field_detailed}> {currentData.title}</div>
            </div>
            <div className={styles.field_name_description}>
              <div className={styles.field_name}>Описание:</div>
              <div className={styles.field_detailed_description}>
                {currentData.description}
              </div>
            </div>
            <div className={styles.field_name_yearRelease}>
              <div className={styles.field_name}>Год создания:</div>
              <div className={styles.field_detailed}>
                {currentData.yearRelease}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onCloseScreenViewing}
          className={styles.exit_viewing_button}
        >
          ВЫЙТИ ИЗ ПРОСМОТРА
        </button>
      </div>
    </div>
  );
};

ScreenViewing.propTypes = {
  currentData: object,
  onCloseScreenViewing: func,
};

export default ScreenViewing;
