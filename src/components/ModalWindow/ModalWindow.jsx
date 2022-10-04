import React from "react";
import styles from "./ModalWindow.module.scss";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const ModalWindow = ({
  showModalWindow,
  onModalWindowOn,
  onModalWindowOff,
  addNewDataFilm,
  handleFile,
}) => {
  return (
    <div>
      <button onClick={onModalWindowOn}>Добавить фильм</button>
      <Formik
        initialValues={{
          title: "",
          description: "",
          yearRelease: "",
          image: "",
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
        onSubmit={addNewDataFilm}
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <Form className={styles.form}>
            {showModalWindow && (
              <div className={styles.modal_content}>
                <button onClick={onModalWindowOff}>X</button>
                <label htmlFor="title"> Название Фильма: </label>
                <input type="text" onChange={handleChange} name="title" />
                {errors.title && touched.title && (
                  <div className={styles.error_message}>{errors.title}</div>
                )}
                <label htmlFor="description">Описание Фильма</label>
                <input type="text" onChange={handleChange} name="description" />
                {errors.description && touched.description && (
                  <div className={styles.error_message}>
                    {errors.description}
                  </div>
                )}
                Год создания:
                <input
                  type="number"
                  onChange={handleChange}
                  name="yearRelease"
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
                <button type="submit" onClick={handleSubmit}>
                  Добавить
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalWindow;
