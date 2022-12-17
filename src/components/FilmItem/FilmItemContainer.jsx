import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCurrentData } from "../../redux/reducer/currentData/actions";
import FilmItem from "./FilmItem";
import { object, func, bool } from "prop-types";
import {
  favoriteFilmsCount,
  putEditDataItem,
} from "../../redux/reducer/data/actions";

const FilmItemContainer = ({
  film,
  setModalViewportOpen,
  onModalEditOpen,
  isFavoritePage,
}) => {
  const dispatch = useDispatch();
  const handleViewportDataFilm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getCurrentData(film.id));

      setModalViewportOpen(true);
    },

    [dispatch, film, setModalViewportOpen]
  );
  const handleCurrentDataFilm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getCurrentData(film.id));
      onModalEditOpen();
    },
    [dispatch, film, onModalEditOpen]
  );
  const handleFavoriteFilm = useCallback(() => {
    dispatch(
      putEditDataItem({
        dataFilm: {
          title: film.title,
          image: film.image,
          description: film.description,
          yearRelease: film.yearRelease,
          isFavorite: !film.isFavorite,
        },
        id: film.id,
        isFavoritePage: isFavoritePage,
      })
    );
    dispatch(favoriteFilmsCount());
  }, [dispatch, film, isFavoritePage]);

  return (
    <FilmItem
      film={film}
      onViewportDataFilm={handleViewportDataFilm}
      onCurrentDataFilm={handleCurrentDataFilm}
      onModalEditOpen={onModalEditOpen}
      onFavoriteFilm={handleFavoriteFilm}
    />
  );
};

FilmItemContainer.propTypes = {
  film: object,
  setModalViewportOpen: func,
  onModalEditOpen: func,
  isFavoritePage: bool,
};

export default FilmItemContainer;
