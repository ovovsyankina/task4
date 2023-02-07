import React from "react";
import styles from "./CreateEditModal.module.scss";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { object, func, bool, string } from "prop-types";
import ModalContainer from "../Modal/ModalContainer";

const DisplayingErrorMessagesSchema = Yup.object({
  title: Yup.string()
    .max(25, "Максимальное количество символов = 25")
    .required("Введите название"),
  description: Yup.string()
    .max(300, "Максимальное количество символов = 300")
    .required("Введите описание"),
  yearRelease: Yup.number()
    .min(1895, "В этом году еще не было ни одного фильма. Введите год с 1895")
    .max(
      new Date().getFullYear(),
      `Такого года еще не наступило. Введите год до ${new Date().getFullYear()}`
    )
    .required("Введите год"),
});

const CreateEditModal = ({
  onAddNewDataFilm,
  currentData,
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  onDeleteDataItem,
  onEditDataItem,
}) => {
  const initialValues = {
    title: modalType === "edit" ? currentData.title : "",
    description: modalType === "edit" ? currentData.description : "",
    yearRelease: modalType === "edit" ? currentData.yearRelease : "",
    image: modalType === "edit" ? currentData.image : "",
  };

  return (
    <ModalContainer isOpen={isModalAddEditOpen}>
      {(modalType === "add" || (modalType === "edit" && currentData.title)) && (
        <Formik
          initialValues={initialValues}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={modalType === "add" ? onAddNewDataFilm : onEditDataItem}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <div className={styles.modal_content}>
                <div className={styles.quick_view_close}>
                  <button
                    type="reset"
                    onClick={onModalAddEditClose}
                    className={styles.quick_view_close_button}
                  />
                </div>
                <div className={styles.window_fill}>
                  <div className={styles.field_content}>
                    <label htmlFor="title" className={styles.field_name}>
                      Название фильма:
                    </label>
                    <input
                      type="text"
                      placeholder="Введите название фильма"
                      onChange={handleChange}
                      name="title"
                      value={values.title}
                      className={styles.field_name_yearRelease_title_image}
                    />
                    {errors.title && touched.title && (
                      <div className={styles.error_message}>{errors.title}</div>
                    )}
                  </div>
                  <div className={styles.field_content_description}>
                    <label htmlFor="description" className={styles.field_name}>
                      Описание фильма
                    </label>
                    <textarea
                      type="text"
                      placeholder="Введите описание фильма"
                      onChange={handleChange}
                      name="description"
                      value={values.description}
                      className={styles.field_name_description}
                    />
                    {errors.description && touched.description && (
                      <div className={styles.error_message}>
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <div className={styles.field_content}>
                    <label htmlFor="yearRelease" className={styles.field_name}>
                      Год создания:
                    </label>
                    <input
                      type="number"
                      placeholder="Введите год создания фильма"
                      onChange={handleChange}
                      name="yearRelease"
                      value={values.yearRelease}
                      className={styles.field_name_yearRelease_title_image}
                    />
                    {errors.yearRelease && touched.yearRelease && (
                      <div className={styles.error_message}>
                        {errors.yearRelease}
                      </div>
                    )}
                  </div>
                  <div className={styles.field_content}>
                    <label htmlFor="image" className={styles.field_name}>
                      Загрузить обложку фильма:
                    </label>
                    <input
                      type="text"
                      placeholder="Вставьте ссылку на изображение"
                      onChange={handleChange}
                      name="image"
                      value={values.image}
                      className={styles.field_name_yearRelease_title_image}
                    />
                  </div>
                </div>
                {modalType === "add" ? (
                  <button type="submit" className={styles.add_button}>
                    Добавить
                  </button>
                ) : (
                  <div className={styles.form_button}>
                    <button type="submit" className={styles.save_button}>
                      Сохранить
                    </button>
                    <button
                      type="button"
                      onClick={onDeleteDataItem}
                      className={styles.delete_button}
                    >
                      Удалить
                    </button>
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </ModalContainer>
  );
};

CreateEditModal.propTypes = {
  addNewDataFilm: func,
  currentData: object,
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddEditClose: func,
  onDeleteDataItem: func,
  onEditDataItem: func,
};

export default CreateEditModal;
