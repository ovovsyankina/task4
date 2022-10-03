import React from "react";
import ModalViewport from "./ModalViewport";

const ModalViewportContainer = ({
  currentData,
  setModalViewport,
  modalViewport,
}) => {
  const handleModalWindowOff = () => {
    setModalViewport(false);
  };
  return (
    <ModalViewport
      currentData={currentData}
      modalViewport={modalViewport}
      onModalWindowOff={handleModalWindowOff}
    />
  );
};
export default ModalViewportContainer;
