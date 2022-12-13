import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentData } from "../../redux/reducer/currentData/actions";
import { currentDataSelector, dataSelector } from "../../redux/selectors";
import App from "./App";
const AppContainer = () => {
  const data = useSelector(dataSelector);
  const currentData = useSelector(currentDataSelector);
  const dispatch = useDispatch();
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
    dispatch(clearCurrentData);
    setModalAddEditOpen(false);
  };
  const counter = useMemo(() => {
    let index = 0;
    data.map((film) => (film.isFavorite ? (index = index + 1) : index));
    return index;
  }, [data]);
  return (
    <App
      currentData={currentData}
      isModalViewportOpen={isModalViewportOpen}
      setModalViewportOpen={setModalViewportOpen}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddOpen={handleModalAddOpen}
      onModalEditOpen={handleModalEditOpen}
      onModalAddEditClose={handleModalAddEditClose}
      counter={counter}
    />
  );
};
export default AppContainer;
