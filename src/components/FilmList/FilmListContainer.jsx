import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentData } from "../../redux/reducer/currentData/actions";
import { getData } from "../../redux/reducer/data/actions";
import {
  currentDataSelector,
  dataSelector,
  filterDataSelector,
} from "../../redux/selectors";
import FilmList from "./FilmList";
const FilmListContainer = ({
  setModalViewportOpen,
  onModalEditOpen,
  isFavorite = false,
}) => {
  const data = useSelector(dataSelector);
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();

  const filteredFilm = useMemo(() => {
    console.log("filter >> ", filter);
    if (filter.length === 0) {
      return data;
    } else {
      return data.filter((film) => {
        return (
          film.title.toLowerCase().includes(filter) ||
          film.title.toUpperCase().includes(filter)
        );
      });
    }
  }, [data, filter]);

  return (
    <FilmList
      isFavorite={isFavorite}
      data={data}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
    />
  );
};
export default FilmListContainer;
