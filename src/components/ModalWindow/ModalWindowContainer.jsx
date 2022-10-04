import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/reducer/data/actions";
import ModalWindow from "./ModalWindow";
const ModalWindowContainer = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const handleModalWindowOn = () => {
    setShowModalWindow(true);
  };

  const handleModalWindowOff = () => {
    setShowModalWindow(false);
  };

  const addNewDataFilm = useCallback(
    (values) => {
      dispatch(
        addData({
          title: values.title,
          image: image,
          description: values.description,
          yearRelease: values.yearRelease,
        })
      );

      setShowModalWindow(false);

      console.log("values", values);
    },
    [dispatch, image]
  );

  return (
    <ModalWindow
      showModalWindow={showModalWindow}
      setShowModalWindow={setShowModalWindow}
      onModalWindowOn={handleModalWindowOn}
      onModalWindowOff={handleModalWindowOff}
      addNewDataFilm={addNewDataFilm}
      handleFile={handleFile}
    />
  );
};
export default ModalWindowContainer;
