import { func } from "prop-types";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteData } from "../../redux/reducer/data/actions";
import { filterDataSelector } from "../../redux/selectors";
import FavoritesPage from "./FavoritesPage";

const FavoritesPageContainer = ({
  onModalAddOpen,
  setQuickViewOpen,
  onModalEditOpen,
}) => {
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteData({ search: filter }));
  }, [dispatch, filter]);

  return (
    <FavoritesPage
      onModalAddOpen={onModalAddOpen}
      setQuickViewOpen={setQuickViewOpen}
      onModalEditOpen={onModalEditOpen}
    />
  );
};

FavoritesPageContainer.propTypes = {
  onModalAddOpen: func,
  setQuickViewOpen: func,
  onModalEditOpen: func,
};

export default FavoritesPageContainer;
