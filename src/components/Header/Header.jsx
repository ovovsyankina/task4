import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        <Link to={`/films/`}>Домашняя страница</Link>
      </div>
      <div>
        <Link to={`/films/favoriteFilm`}>Избранное</Link>
      </div>
    </div>
  );
};
export default Header;
