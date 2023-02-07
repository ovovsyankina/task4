import React from "react";
import { Link } from "react-router-dom";
import { object, func, bool } from "prop-types";
import styles from "./FilmItem.module.scss";
import { verifyUrlImage } from "../../utils";

const FilmItem = ({
  film,
  onOpenQuickView,
  onEditCurrentFilm,
  onAddFavoriteFilm,
  isHomePage,
}) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.favorite_check_star}>
          <input
            type="checkbox"
            checked={film.isFavorite}
            onChange={onAddFavoriteFilm}
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
                : process.env.PUBLIC_URL + "/image/defaultImageFilm.jpeg"
            }
            alt="Обложка фильма"
            className={styles.field_name_image}
          />
        </div>
      </div>
      <div className={styles.button_svg}>
        <button onClick={onEditCurrentFilm} className={styles.edit_button} />
        <button
          onClick={onOpenQuickView}
          className={styles.quick_view_button}
        />
      </div>

      <Link
        to={isHomePage ? `/${film.id}` : `/favorite/${film.id}`}
        className={styles.viewing_page}
      >
        Подробнее
      </Link>
    </div>
  );
};

FilmItem.propTypes = {
  film: object,
  onViewportDataFilm: func,
  onCurrentDataFilm: func,
  onFavoriteFilm: func,
  isHomePage: bool,
};

export default FilmItem;
