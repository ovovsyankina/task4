import { func, string, bool } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { dataSelector, favoriteDataSelector } from "../../redux/selectors";
import FilmList from "./FilmList";
const FilmListContainer = ({
  setModalViewportOpen,
  onModalEditOpen,
  isFavoritePage = false,
  page,
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
    />
  );
};

FilmListContainer.propTypes = {
  setModalViewportOpen: func,
  onModalEditOpen: func,
  isFavoritePage: bool,
  page: string,
};
export default FilmListContainer;
