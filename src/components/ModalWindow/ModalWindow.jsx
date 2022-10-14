import React from "react";
import styles from "./ModalWindow.module.scss";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const ModalWindow = ({
  addNewDataFilm,
  handleFile,
  currentData,
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  onDeleteDataItem,
  onEditDataItem,
}) => {
  return (
    isModalAddEditOpen && (
      <div>
        {(modalType === "add" ||
          (modalType === "edit" && currentData.title)) && (
          <Formik
            initialValues={{
              title: modalType === "edit" ? currentData.title : "",
              description: modalType === "edit" ? currentData.description : "",
              yearRelease: modalType === "edit" ? currentData.yearRelease : "",
              image: modalType === "edit" ? currentData.image : "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .uppercase("Введите с заглавной буквой")
                .required("Введите название"),
              description: Yup.string()
                .max(15, "max 15")
                .required("Введите описание"),
              yearRelease: Yup.number()
                .min(
                  1895,
                  "В этом году еще не было ни одного фильма. Введите год с 1895"
                )
                .max(2022, "Такого года еще не наступило. Введите год до 2022")
                .required("Введите год"),
            })}
            onSubmit={modalType === "add" ? addNewDataFilm : onEditDataItem}
          >
            {({ errors, touched, handleSubmit, handleChange, values }) => (
              <Form className={styles.form}>
                <div className={styles.modal_content}>
                  <button type="button" onClick={onModalAddEditClose}>
                    X
                  </button>
                  <label htmlFor="title"> Название Фильма: </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="title"
                    value={values.title}
                  />
                  {errors.title && touched.title && (
                    <div className={styles.error_message}>{errors.title}</div>
                  )}
                  <label htmlFor="description">Описание Фильма</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="description"
                    value={values.description}
                  />
                  {errors.description && touched.description && (
                    <div className={styles.error_message}>
                      {errors.description}
                    </div>
                  )}
                  <label htmlFor="yearRelease">Год создания:</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="yearRelease"
                    value={values.yearRelease}
                  />
                  {errors.yearRelease && touched.yearRelease && (
                    <div className={styles.error_message}>
                      {errors.yearRelease}
                    </div>
                  )}
                  Загрузить обложку фильма:
                  <input
                    type="file"
                    name="myImage"
                    onChange={(e) => handleFile(e)}
                  />
                  {modalType === "add" ? (
                    <button type="submit">Добавить</button>
                  ) : (
                    <div>
                      <button type="submit">Сохранить</button>
                      <button type="button" onClick={onDeleteDataItem}>
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    )
  );
};

export default ModalWindow;
