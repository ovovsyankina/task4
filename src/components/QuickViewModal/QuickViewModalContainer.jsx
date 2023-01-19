import React, { useCallback, useEffect } from "react";
import QuickViewModal from "./QuickViewModal";
import { object, func, bool } from "prop-types";
import { useDispatch } from "react-redux";
import { getCurrentData } from "../../redux/reducer/currentData/actions";

const QuickViewModalContainer = ({
  currentData,
  setQuickViewOpen,
  isQuickViewOpen,
}) => {
  const dispatch = useDispatch();

  const handleModalWindowOff = useCallback(() => {
    setQuickViewOpen(false);
    dispatch(getCurrentData(""));
  }, [dispatch, setQuickViewOpen]);

  useEffect(() => {
    if (isQuickViewOpen === true) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
    }
  }, [isQuickViewOpen]);

  return (
    <QuickViewModal
      currentData={currentData}
      isQuickViewOpen={isQuickViewOpen}
      onModalWindowOff={handleModalWindowOff}
    />
  );
};

QuickViewModalContainer.propTypes = {
  currentData: object,
  isQuickViewOpen: bool,
  setQuickViewOpen: func,
};

export default QuickViewModalContainer;
