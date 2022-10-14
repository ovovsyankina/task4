import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currentDataSelector, dataSelector } from "../../redux/selectors";
import FilmList from "./FilmList";
const FilmListContainer = () => {
  const data = useSelector(dataSelector);
  const currentData = useSelector(currentDataSelector);
  const [isModalViewportOpen, setModalViewportOpen] = useState(false);
  const [isModalAddEditOpen, setModalAddEditOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
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
    />
  );
};
export default FilmListContainer;
