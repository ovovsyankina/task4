import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { viewportData } from "../../redux/reducer/currentData/actions";
import FilmItem from "./FilmItem";

const FilmItemContainer = ({ data, setModalViewport }) => {
  const dispatch = useDispatch();

  const viewportDataFilm = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(viewportData(data));
      setModalViewport(true);
    },

    [dispatch, data]
  );

  return <FilmItem data={data} viewportDataFilm={viewportDataFilm} />;
};
export default FilmItemContainer;
