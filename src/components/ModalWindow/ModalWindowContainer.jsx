import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  deleteDataItem,
  putEditDataItem,
} from "../../redux/reducer/data/actions";
import ModalWindow from "./ModalWindow";
import { object, func, bool, string } from "prop-types";
import { getCurrentData } from "../../redux/reducer/currentData/actions";
const ModalWindowContainer = ({
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  currentData,
}) => {
  const dispatch = useDispatch();

  const addNewDataFilm = useCallback(
    (values) => {
      dispatch(
        addData({
          id: values.id,
          title: values.title,
          image: values.image,
          description: values.description,
          yearRelease: values.yearRelease,
          isFavorite: false,
        })
      );
      onModalAddEditClose();
    },
    [dispatch, onModalAddEditClose]
  );
  const handleDeleteDataItem = useCallback(() => {
    dispatch(deleteDataItem(currentData.id));

    onModalAddEditClose();
    dispatch(getCurrentData(""));
  }, [dispatch, onModalAddEditClose, currentData.id]);

  const handleEditDataItem = useCallback(
    (values) => {
      dispatch(
        putEditDataItem({
          dataFilm: {
            title: values.title,
            image: values.image,
            description: values.description,
            yearRelease: values.yearRelease,
            isFavorite: currentData.isFavorite,
          },
          id: currentData.id,
        })
      );

      onModalAddEditClose();
      dispatch(getCurrentData(""));
    },
    [dispatch, onModalAddEditClose, currentData]
  );
  useEffect(() => {
    if (isModalAddEditOpen === true) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
    }
  }, [isModalAddEditOpen]);
  return (
    <ModalWindow
      addNewDataFilm={addNewDataFilm}
      currentData={currentData}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddEditClose={onModalAddEditClose}
      onDeleteDataItem={handleDeleteDataItem}
      onEditDataItem={handleEditDataItem}
    />
  );
};

ModalWindowContainer.propTypes = {
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddEditClose: func,
  currentData: object,
};

export default ModalWindowContainer;
