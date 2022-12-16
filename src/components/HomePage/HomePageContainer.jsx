import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getFavoriteData } from "../../redux/reducer/data/actions";
import { dataSelector, filterDataSelector } from "../../redux/selectors";
import HomePage from "./HomePage";
const HomePageContainer = ({
  onModalAddOpen,
  setModalViewportOpen,
  onModalEditOpen,
}) => {
  const data = useSelector(dataSelector);
  const filter = useSelector(filterDataSelector);
  const dispatch = useDispatch();
  const page = "all";
  console.log("data", data);
  useEffect(() => {
    dispatch(getData({ search: filter }));
    dispatch(getFavoriteData({ search: "" }));
  }, [dispatch, filter]);

  return (
    <HomePage
      onModalAddOpen={onModalAddOpen}
      setModalViewportOpen={setModalViewportOpen}
      onModalEditOpen={onModalEditOpen}
      page={page}
    />
  );
};
export default HomePageContainer;
