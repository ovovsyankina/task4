import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { favoriteFilmsCount } from "../../redux/reducer/data/actions";
import { favoriteCountSelector } from "../../redux/selectors";
import Header from "./Header";

const HeaderContainer = () => {
  const favoriteCount = useSelector(favoriteCountSelector);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/films");
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    dispatch(favoriteFilmsCount());
  }, [dispatch]);

  return (
    <Header
      counter={favoriteCount}
      isFavorites={location.pathname === "/films/favorite"}
    />
  );
};

export default HeaderContainer;
