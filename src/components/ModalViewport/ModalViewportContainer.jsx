import React, { useCallback, useEffect } from "react";
import ModalViewport from "./ModalViewport";
import { object, func, bool } from "prop-types";
import { useDispatch } from "react-redux";
import { getCurrentData } from "../../redux/reducer/currentData/actions";

const ModalViewportContainer = ({
  currentData,
  setModalViewportOpen,
  isModalViewportOpen,
}) => {
  const dispatch = useDispatch();

  const handleModalWindowOff = useCallback(() => {
    setModalViewportOpen(false);
    dispatch(getCurrentData(""));
  }, [dispatch, setModalViewportOpen]);

  useEffect(() => {
    if (isModalViewportOpen === true) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
    }
  }, [isModalViewportOpen]);

  return (
    <ModalViewport
      currentData={currentData}
      isModalViewportOpen={isModalViewportOpen}
      onModalWindowOff={handleModalWindowOff}
    />
  );
};
ModalViewportContainer.propTypes = {
  currentData: object,
  isModalViewportOpen: bool,
  setModalViewportOpen: func,
};

export default ModalViewportContainer;
