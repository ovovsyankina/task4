import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/reducer/data/actions";
const FavoritesFilmContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("favorite"));
  }, [dispatch]);
  return;
};
export default FavoritesFilmContainer;
