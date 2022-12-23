import React, { useEffect } from "react";
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
