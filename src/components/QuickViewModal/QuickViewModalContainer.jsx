import React, { useCallback } from "react";
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
