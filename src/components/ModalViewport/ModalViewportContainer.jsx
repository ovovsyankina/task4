import React from "react";
import ModalViewport from "./ModalViewport";

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
export default ModalViewportContainer;
