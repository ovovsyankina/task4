import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  deleteDataItem,
  putEditDataItem,
} from "../../redux/reducer/data/actions";
import CreateEditModal from "./CreateEditModal";
import { object, func, bool, string } from "prop-types";
import { getCurrentData } from "../../redux/reducer/currentData/actions";

const CreateEditModalContainer = ({
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  currentData,
}) => {
  const dispatch = useDispatch();

  const handleAddNewDataFilm = useCallback(
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

  return (
    <CreateEditModal
      onAddNewDataFilm={handleAddNewDataFilm}
      currentData={currentData}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddEditClose={onModalAddEditClose}
      onDeleteDataItem={handleDeleteDataItem}
      onEditDataItem={handleEditDataItem}
    />
  );
};

CreateEditModalContainer.propTypes = {
  isModalAddEditOpen: bool,
  modalType: string,
  onModalAddEditClose: func,
  currentData: object,
};

export default CreateEditModalContainer;
