import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/reducer/data/actions";
import { dataSelector } from "../../redux/selectors";
import FavoritesPage from "./FavoritesPage";
const FavoritesPageContainer = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  console.log("data", data);
  useEffect(() => {
    dispatch(getData("favorite"));
  }, [dispatch]);
  return (
    <FavoritesPage
      onModalAddOpen={onModalAddOpen}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
    />
  );
};
export default FavoritesPageContainer;
