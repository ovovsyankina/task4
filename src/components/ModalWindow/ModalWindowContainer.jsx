import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  deleteDataItem,
  editDataItem,
} from "../../redux/reducer/data/actions";
import ModalWindow from "./ModalWindow";
const ModalWindowContainer = ({
  isModalAddEditOpen,
  modalType,
  onModalAddEditClose,
  currentData,
  data,
}) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleFile = (e) => {
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
        })
      );
      onModalAddEditClose();
    },
    [dispatch, image, onModalAddEditClose]
  );
  const handleDeleteDataItem = useCallback(() => {
    dispatch(deleteDataItem(currentData.id));
    onModalAddEditClose();
  }, [dispatch, onModalAddEditClose, currentData.id]);

  const handleEditDataItem = useCallback(
    (values) => {
      console.log("image : ", image);
      dispatch(
        editDataItem(
          {
            title: values.title,
            image: image,
            description: values.description,
            yearRelease: values.yearRelease,
          },
          currentData.id
        )
      );

      onModalAddEditClose();
    },
    [dispatch, onModalAddEditClose, currentData.id, image]
  );
  return (
    <ModalWindow
      addNewDataFilm={addNewDataFilm}
      handleFile={handleFile}
      data={data}
      currentData={currentData}
      isModalAddEditOpen={isModalAddEditOpen}
      modalType={modalType}
      onModalAddEditClose={onModalAddEditClose}
      onDeleteDataItem={handleDeleteDataItem}
      onEditDataItem={handleEditDataItem}
    />
  );
};
export default ModalWindowContainer;
