import React from "react";
import { Link } from "react-router-dom";
import { object, func } from "prop-types";
import styles from "./FilmItem.module.scss";
import { verifyUrlImage } from "../../utils";

const FilmItem = ({
  film,
  onViewportDataFilm,
  onCurrentDataFilm,
  onFavoriteFilm,
}) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.favorite_check_star}>
          <input
            type="checkbox"
            checked={film.isFavorite}
            onChange={onFavoriteFilm}
            className={styles.favorite_button}
            id={film.id}
          />
          <label className={styles.label_favorite} htmlFor={film.id} />
        </div>
        <div className={styles.fields_title}>
          <p className={styles.field_name}>Название фильма:</p>
          <div className={styles.field_name_title}>{film.title}</div>
        </div>
        <div className={styles.fields_image}>
          <p className={styles.field_name}>Обложка фильма:</p>
          <img
            src={
              verifyUrlImage(film.image)
                ? film.image
                : process.env.PUBLIC_URL + "/defaultImageFilm.jpeg"
            }
            alt="Обложка фильма"
            className={styles.field_name_image}
          />
        </div>
      </div>
      <div className={styles.button_svg}>
        <button onClick={onCurrentDataFilm} className={styles.edit_button} />
        <button
          alt="quick_view_icon"
          onClick={onViewportDataFilm}
          className={styles.quick_view_button}
        />
      </div>
      <Link to={`/${film.id}`}>
        <button className={styles.viewing_page}>Подробнее</button>
      </Link>
    </div>
  );
};

FilmItem.propTypes = {
  film: object,
  onViewportDataFilm: func,
  onCurrentDataFilm: func,
  onFavoriteFilm: func,
};

export default FilmItem;
