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
const FilmListContainer = () => {
  const data = useSelector(dataSelector);
  const currentData = useSelector(currentDataSelector);
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();
  const [isModalViewportOpen, setModalViewportOpen] = useState(false);
  const [isModalAddEditOpen, setModalAddEditOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  // console.log("currentData : ", currentData);
  // console.log("data >> ", data);
  // console.log("filter >> ", filter);
  const handleModalAddOpen = () => {
    setModalAddEditOpen(true);
    setModalType("add");
  };
  const handleModalEditOpen = () => {
    setModalAddEditOpen(true);
    setModalType("edit");
  };
  const handleModalAddEditClose = () => {
    dispatch(clearCurrentData);
    setModalAddEditOpen(false);
  };

  useEffect(() => {
    dispatch(getData("all"));
  }, [dispatch]);
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
      data={data}
      currentData={currentData}
      isModalViewportOpen={isModalViewportOpen}
      setModalViewportOpen={setModalViewportOpen}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddOpen={handleModalAddOpen}
      onModalEditOpen={handleModalEditOpen}
      onModalAddEditClose={handleModalAddEditClose}
      filteredFilm={filteredFilm}
    />
  );
};
export default FilmListContainer;
