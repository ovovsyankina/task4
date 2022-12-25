import React from "react";
import { Link } from "react-router-dom";
import { object, func } from "prop-types";
import styles from "./FilmItem.module.scss";
import { verifyUrlImage } from "../../utils";
import defaultImageFilm from "../../utils/defaultImageFilm.jpeg";
import quick_view_icon from "../../image/quick_view.svg";
import edit_icon from "../../image/edit.svg";
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
            src={verifyUrlImage(film.image) ? film.image : defaultImageFilm}
            alt="Обложка фильма"
            className={styles.field_name_image}
          />
        </div>
      </div>
      <div className={styles.button_svg}>
        <img
          src={edit_icon}
          alt="edit_icon"
          onClick={onCurrentDataFilm}
          className={styles.edit_button}
        />
        <img
          src={quick_view_icon}
          alt="quick_view_icon"
          onClick={onViewportDataFilm}
          className={styles.quick_view_button}
        />
      </div>
      <Link to={`/films/${film.id}`}>
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
