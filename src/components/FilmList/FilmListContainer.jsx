import React from "react";
import { func, string, bool } from "prop-types";
import { useSelector } from "react-redux";
import { dataSelector, favoriteDataSelector } from "../../redux/selectors";
import FilmList from "./FilmList";

const FilmListContainer = ({
  setModalViewportOpen,
  onModalEditOpen,
  isFavoritePage = false,
  page,
  onModalAddOpen,
}) => {
  const data = useSelector(dataSelector);
  const favoriteData = useSelector(favoriteDataSelector);

  return (
    <FilmList
      isFavoritePage={isFavoritePage}
      data={data}
      favoriteData={favoriteData}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
      page={page}
      onModalAddOpen={onModalAddOpen}
    />
  );
};

FilmListContainer.propTypes = {
  setModalViewportOpen: func,
  onModalEditOpen: func,
  onModalAddOpen: func,
  isFavoritePage: bool,
  page: string,
};

export default FilmListContainer;
