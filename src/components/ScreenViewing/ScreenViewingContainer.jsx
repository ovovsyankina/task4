import React, { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentData } from "../../redux/reducer/currentData/actions";
import { currentDataSelector } from "../../redux/selectors";
import ScreenViewing from "./ScreenViewing";

const ScreenViewingContainer = () => {
  const currentData = useSelector(currentDataSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filmId } = useParams();

  useEffect(() => {
    dispatch(getCurrentData(filmId));
  }, [dispatch, filmId]);
  const handleCloseScreenViewing = useCallback(() => {
    navigate(-1);
    dispatch(getCurrentData(""));
  }, [navigate, dispatch]);

  return (
    <ScreenViewing
      currentData={currentData}
      onCloseScreenViewing={handleCloseScreenViewing}
    />
  );
};

export default ScreenViewingContainer;
