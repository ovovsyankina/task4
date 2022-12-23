import React from "react";
import { useSelector } from "react-redux";
import { favoriteCountSelector } from "../../redux/selectors";
import Header from "./Header";
const HeaderContainer = () => {
  let favoriteCount = useSelector(favoriteCountSelector);

  return <Header counter={favoriteCount} />;
};

export default HeaderContainer;
