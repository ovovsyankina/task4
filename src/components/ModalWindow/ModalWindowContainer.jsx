import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  deleteDataItem,
  putEditDataItem,
} from "../../redux/reducer/data/actions";
import ModalWindow from "./ModalWindow";
import { object, func, bool, string } from "prop-types";
const ModalWindowContainer = ({
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  currentData,
}) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleFileImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const addNewDataFilm = useCallback(
    (values) => {
      dispatch(
        addData({
          id: values.id,
          title: values.title,
          image: image,
          description: values.description,
          yearRelease: values.yearRelease,
          isFavorite: false,
        })
      );
      onModalAddEditClose();
    },
    [dispatch, image, onModalAddEditClose]
  );
  const handleDeleteDataItem = useCallback(() => {
    dispatch(deleteDataItem(currentData.id));

    onModalAddEditClose();
    console.log("DELETE / ", currentData.id);
  }, [dispatch, onModalAddEditClose, currentData.id]);

  const handleEditDataItem = useCallback(
    (values) => {
      dispatch(
        putEditDataItem({
          dataFilm: {
            title: values.title,
            image: image,
            description: values.description,
            yearRelease: values.yearRelease,
            isFavorite: currentData.isFavorite,
          },
          id: currentData.id,
        })
      );

      onModalAddEditClose();
    },
    [dispatch, onModalAddEditClose, currentData, image]
  );

  return (
    <ModalWindow
      addNewDataFilm={addNewDataFilm}
      onFileImg={handleFileImg}
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
