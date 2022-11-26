import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCurrentData } from "../../redux/reducer/currentData/actions";
import FilmItem from "./FilmItem";
import { object, func } from "prop-types";

const FilmItemContainer = ({ film, setModalViewportOpen, onModalEditOpen }) => {
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

  return (
    <FilmItem
      film={film}
      onViewportDataFilm={handleViewportDataFilm}
      onCurrentDataFilm={handleCurrentDataFilm}
      onModalEditOpen={onModalEditOpen}
    />
  );
};

FilmItemContainer.propTypes = {
  film: object,
  setModalViewportOpen: func,
  onModalEditOpen: func,
};

export default FilmItemContainer;
