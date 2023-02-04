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
  setQuickViewOpen,
  onModalEditOpen,
  isHomePage,
}) => {
  const dispatch = useDispatch();

  const handleOpenQuickView = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getCurrentData(film.id));
      setQuickViewOpen(true);
    },
    [dispatch, film, setQuickViewOpen]
  );

  const handleEditCurrentFilm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getCurrentData(film.id));
      onModalEditOpen();
    },
    [dispatch, film, onModalEditOpen]
  );

  const handleAddFavoriteFilm = useCallback(() => {
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
        isFavoritePage: !isHomePage,
      })
    );
    dispatch(favoriteFilmsCount());
  }, [dispatch, film, isHomePage]);

  return (
    <FilmItem
      film={film}
      onOpenQuickView={handleOpenQuickView}
      onEditCurrentFilm={handleEditCurrentFilm}
      onModalEditOpen={onModalEditOpen}
      onAddFavoriteFilm={handleAddFavoriteFilm}
      isHomePage={isHomePage}
    />
  );
};

FilmItemContainer.propTypes = {
  film: object,
  setQuickViewOpen: func,
  onModalEditOpen: func,
  isHomePage: bool,
};

export default FilmItemContainer;
