import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currentDataSelector, dataSelector } from "../../redux/selectors";
import FilmList from "./FilmList";
const FilmListContainer = () => {
  const data = useSelector(dataSelector);
  const currentData = useSelector(currentDataSelector);
  const [modalViewport, setModalViewport] = useState(false);

  console.log("currentData >>", currentData);
  return (
    <FilmList
      data={data}
      currentData={currentData}
      modalViewport={modalViewport}
      setModalViewport={setModalViewport}
    />
  );
};
export default FilmListContainer;
