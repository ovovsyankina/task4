import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentData } from "../../redux/reducer/currentData/actions";
import FilmItem from "./FilmItem";

const FilmItemContainer = ({ data, setModalViewportOpen, onModalEditOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewportDataFilm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(currentData(data));

      setModalViewportOpen(true);
    },

    [dispatch, data]
  );
  const handleCurrentDataFilm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(currentData(data));
      onModalEditOpen();
    },
    [dispatch, data]
  );

  const handleScreenViewing = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(currentData(data));
      navigate(`/films/${data.id}`);
    },
    [dispatch, data]
  );
  return (
    <FilmItem
      data={data}
      onViewportDataFilm={handleViewportDataFilm}
      onCurrentDataFilm={handleCurrentDataFilm}
      onModalEditOpen={onModalEditOpen}
      onScreenViewing={handleScreenViewing}
    />
  );
};
export default FilmItemContainer;
