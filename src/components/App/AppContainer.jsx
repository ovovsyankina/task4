import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentData } from "../../redux/reducer/currentData/actions";
import { favoriteFilmsCount } from "../../redux/reducer/data/actions";
import {
  currentDataSelector,
  favoriteCountSelector,
} from "../../redux/selectors";
import App from "./App";
const AppContainer = () => {
  const favoriteCount = useSelector(favoriteCountSelector);
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
  useEffect(() => {
    dispatch(favoriteFilmsCount());
  }, [dispatch]);
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
      counter={favoriteCount}
    />
  );
};
export default AppContainer;
