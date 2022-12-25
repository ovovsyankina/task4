import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentData } from "../../redux/reducer/currentData/actions";
import { currentDataSelector } from "../../redux/selectors";
import App from "./App";
const AppContainer = () => {
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
    dispatch(getCurrentData(""));
    setModalAddEditOpen(false);
  };

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
    />
  );
};
export default AppContainer;
