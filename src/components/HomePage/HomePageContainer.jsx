import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/reducer/data/actions";
import { dataSelector } from "../../redux/selectors";
import HomePage from "./HomePage";
const HomePageContainer = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  console.log("data", data);
  useEffect(() => {
    dispatch(getData("all"));
  }, [dispatch]);
  return (
    <HomePage
      onModalAddOpen={onModalAddOpen}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
    />
  );
};
export default HomePageContainer;
