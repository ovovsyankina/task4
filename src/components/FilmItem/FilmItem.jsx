import React from "react";
import { Link } from "react-router-dom";
import { object, func } from "prop-types";
import styles from "./FilmItem.module.scss";
const FilmItem = ({
  film,
  onViewportDataFilm,
  onCurrentDataFilm,
  onFavoriteFilm,
}) => {
  return (
    <li className={styles.root}>
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
          <p>Обложка:</p>{" "}
          <img
            src={film.image}
            className={styles.film_cover}
            alt="film cover"
          />
        </div>
      </div>
      <button onClick={onViewportDataFilm}>Быстрый просмотр</button>
      <button onClick={onCurrentDataFilm}>Редактировать</button>
      <Link to={`/films/${film.id}`}>
        <button>Посмотреть</button>
      </Link>
    </li>
  );
};
FilmItem.propTypes = {
  film: object,
  onViewportDataFilm: func,
  onCurrentDataFilm: func,
};

export default FilmItem;
