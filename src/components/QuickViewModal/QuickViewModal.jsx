import React from "react";
import { object, func, bool } from "prop-types";
import styles from "./QuickViewModal.module.scss";
import { verifyUrlImage } from "../../utils";
import ModalContainer from "../Modal/ModalContainer";

const QuickViewModal = ({ currentData, isQuickViewOpen, onModalWindowOff }) => {
  return (
    <ModalContainer isOpen={isQuickViewOpen}>
      <div className={styles.content_modal}>
        <div className={styles.field_image_container}>
          <img
            src={
              verifyUrlImage(currentData.image)
                ? currentData.image
                : process.env.PUBLIC_URL + "/image/defaultImageFilm.jpeg"
            }
            alt="Обложка фильма"
            className={styles.field_image}
          />
        </div>
        <div className={styles.content_modal_text}>
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
    </ModalContainer>
  );
};

QuickViewModal.propTypes = {
  currentData: object,
  isQuickViewOpen: bool,
  onModalWindowOff: func,
};

export default QuickViewModal;
