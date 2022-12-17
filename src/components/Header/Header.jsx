import { number } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
const Header = ({ counter }) => {
  return (
    <div>
      <div>
        <Link to={`/films/`}>Домашняя страница</Link>
      </div>
      <div>
        <Link to={`/films/favorite`}>Избранное {counter}</Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  counter: number,
};
export default Header;
