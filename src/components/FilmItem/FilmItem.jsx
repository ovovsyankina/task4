import React from "react";
import { Link } from "react-router-dom";
import { object, func } from "prop-types";
import styles from "./FilmItem.module.scss";
import { verifyUrlImage } from "../../utils";
import defaultImageFilm from "../../utils/defaultImageFilm.jpeg";
const FilmItem = ({
  film,
  onViewportDataFilm,
  onCurrentDataFilm,
  onFavoriteFilm,
}) => {
  return (
    <div className={styles.root}>
      <div>
        <div>
          <input
            type="checkbox"
            checked={film.isFavorite}
            onChange={onFavoriteFilm}
          />
        </div>
        <div>
          <p>Название Фильма:</p>
          {film.title}
        </div>
        <div>
          <p>Обложка:</p>
          <img
            src={verifyUrlImage(film.image) ? film.image : defaultImageFilm}
            alt="Обложка фильма"
            className={styles.film_cover}
          />
        </div>
      </div>
      <button onClick={onViewportDataFilm}>Быстрый просмотр</button>
      <button onClick={onCurrentDataFilm}>Редактировать</button>
      <Link to={`/films/${film.id}`}>
        <button>Посмотреть</button>
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
