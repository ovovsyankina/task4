import React from "react";
import styles from "./FilmItem.module.scss";
const FilmItem = ({ data, viewportDataFilm }) => {
  return (
    <li className={styles.root}>
      <div>
        <div>
          <p>Название Фильма:</p>
          {data.title}
        </div>
        <div>
          <p>Обложка:</p> <img src={data.image} className={styles.film_cover} />
        </div>
      </div>
      <button onClick={viewportDataFilm}>Быстрый просмотр</button>
    </li>
  );
};
export default FilmItem;
