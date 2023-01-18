import React, { useEffect } from "react";
import { func } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/reducer/data/actions";
import { filterDataSelector } from "../../redux/selectors";
import HomePage from "./HomePage";

const HomePageContainer = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ search: filter }));
  }, [dispatch, filter]);

  return (
    <HomePage
      onModalAddOpen={onModalAddOpen}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
    />
  );
};

HomePageContainer.propTypes = {
  onModalAddOpen: func,
  setModalViewportOpen: func,
  onModalEditOpen: func,
};

export default HomePageContainer;
