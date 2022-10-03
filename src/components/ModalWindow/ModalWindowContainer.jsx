import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/reducer/data/actions";
import ModalWindow from "./ModalWindow";
const ModalWindowContainer = () => {
  const [showModalWindow, setShowModalWindow] = useState(false);

  const [dataFilm, setDataFilm] = useState({
    title: "",
    image: "",
    description: "",
    yearRelease: "",
  });
  const dispatch = useDispatch();
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setDataFilm({ ...dataFilm, image: URL.createObjectURL(img) });
    }
  };

  const handleModalWindowOn = () => {
    setShowModalWindow(true);
  };

  const handleModalWindowOff = () => {
    setShowModalWindow(false);
  };
  const addNewDataFilm = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(addData(dataFilm));
      setDataFilm({
        title: "",
        image: "",
        description: "",
        genre: "",
        yearRelease: "",
      });
      setShowModalWindow(false);
    },

    [dispatch, dataFilm]
  );
  const handleChangeInput = useCallback(
    (e, fieldName) => {
      setDataFilm({ ...dataFilm, [fieldName]: e.target.value });
    },
    [dataFilm]
  );

  return (
    <ModalWindow
      showModalWindow={showModalWindow}
      setShowModalWindow={setShowModalWindow}
      onModalWindowOn={handleModalWindowOn}
      onModalWindowOff={handleModalWindowOff}
      addNewDataFilm={addNewDataFilm}
      dataFilm={dataFilm}
      onChangeInput={handleChangeInput}
      handleFile={handleFile}
    />
  );
};
export default ModalWindowContainer;
