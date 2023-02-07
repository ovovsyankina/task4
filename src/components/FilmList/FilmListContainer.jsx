import React from "react";
import { func } from "prop-types";
import { useSelector } from "react-redux";
import {
  dataSelector,
  favoriteDataSelector,
  filterDataSelector,
} from "../../redux/selectors";
import FilmList from "./FilmList";
import { useLocation } from "react-router-dom";

const FilmListContainer = ({
  setQuickViewOpen,
  onModalEditOpen,
  onModalAddOpen,
}) => {
  const data = useSelector(dataSelector);
  const favoriteData = useSelector(favoriteDataSelector);
  const location = useLocation();
  const filter = useSelector(filterDataSelector);

  return (
    <FilmList
      data={data}
      favoriteData={favoriteData}
      setQuickViewOpen={setQuickViewOpen}
      onModalEditOpen={onModalEditOpen}
      onModalAddOpen={onModalAddOpen}
      isHomePage={location.pathname === "/"}
      filter={filter}
    />
  );
};

FilmListContainer.propTypes = {
  setQuickViewOpen: func,
  onModalEditOpen: func,
  onModalAddOpen: func,
};

export default FilmListContainer;
