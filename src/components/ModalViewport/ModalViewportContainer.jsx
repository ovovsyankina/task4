import React from "react";
import ModalViewport from "./ModalViewport";
import { object, func, bool } from "prop-types";

const ModalViewportContainer = ({
  currentData,
  setModalViewportOpen,
  isModalViewportOpen,
}) => {
  const handleModalWindowOff = () => {
    setModalViewportOpen(false);
  };
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
