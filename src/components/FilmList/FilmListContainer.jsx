import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
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
  const [isModalViewportOpen, setModalViewportOpen] = useState(false);
  const [isModalAddEditOpen, setModalAddEditOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  console.log("data >> ", data);
  console.log("filter >> ", filter);
  const handleModalAddOpen = () => {
    setModalAddEditOpen(true);
    setModalType("add");
  };
  const handleModalEditOpen = () => {
    setModalAddEditOpen(true);
    setModalType("edit");
  };
  const handleModalAddEditClose = () => {
    setModalAddEditOpen(false);
  };

  const filteredFilm = useMemo(() => {
    if (filter.length === 0) {
      return data;
    } else {
      return data.filter((film) => {
        return film.title.includes(filter);
      });
    }
  }, [data, filter]);
  console.log("filteredFilm >>", filteredFilm);
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
