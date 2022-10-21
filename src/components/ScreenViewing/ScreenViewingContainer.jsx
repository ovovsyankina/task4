import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentDataSelector } from "../../redux/selectors";
import ScreenViewing from "./ScreenViewing";

const ScreenViewingContainer = () => {
  const currentData = useSelector(currentDataSelector);
  const navigate = useNavigate();

  console.log("currentData >> ", currentData);
  const handleCloseScreenViewing = useCallback(() => {
    navigate(`/films`);
  }, []);

  return (
    <ScreenViewing
      currentData={currentData}
      onCloseScreenViewing={handleCloseScreenViewing}
    />
  );
};
export default ScreenViewingContainer;
