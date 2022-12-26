import React from "react";
import { object, func, bool } from "prop-types";
import styles from "./ModalViewport.module.scss";
import { verifyUrlImage } from "../../utils";

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
            <div className={styles.field_image_container}>
              <img
                src={
                  verifyUrlImage(currentData.image)
                    ? currentData.image
                    : process.env.PUBLIC_URL + "/defaultImageFilm.jpeg"
                }
                alt="Обложка фильма"
                className={styles.field_image}
              />
            </div>
            <div className={styles.content_modal_window}>
              <div className={styles.quick_view_close}>
                <button
                  onClick={onModalWindowOff}
                  className={styles.quick_view_close_button}
                ></button>
              </div>
              <div className={styles.field_name_title}>{currentData.title}</div>
              <div className={styles.field_name_description}>
                {currentData.description}
              </div>
              <div className={styles.field_name_yearRelease}>
                Год создания: {currentData.yearRelease}
              </div>
            </div>
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
