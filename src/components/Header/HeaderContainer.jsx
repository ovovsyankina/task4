import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { favoriteFilmsCount } from "../../redux/reducer/data/actions";
import { favoriteCountSelector } from "../../redux/selectors";
import Header from "./Header";

const HeaderContainer = () => {
  const favoriteCount = useSelector(favoriteCountSelector);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoriteFilmsCount());
  }, [dispatch]);
  return (
    <Header
      counter={favoriteCount}
      isFavorites={location.pathname === "/favorite"}
    />
  );
};

export default HeaderContainer;
