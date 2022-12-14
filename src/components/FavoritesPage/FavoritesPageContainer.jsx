import { func } from "prop-types";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteData } from "../../redux/reducer/data/actions";
import { filterDataSelector } from "../../redux/selectors";
import FavoritesPage from "./FavoritesPage";

const FavoritesPageContainer = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();
  const page = "favorite";

  useEffect(() => {
    if (page === "favorite") {
      dispatch(getFavoriteData({ search: filter }));
    }
  }, [dispatch, filter, page]);

  return (
    <FavoritesPage
      onModalAddOpen={onModalAddOpen}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
      page={page}
    />
  );
};

FavoritesPageContainer.propTypes = {
  onModalAddOpen: func,
  setModalViewportOpen: func,
  onModalEditOpen: func,
};

export default FavoritesPageContainer;
