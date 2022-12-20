import { string } from "prop-types";
import { number } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
const Header = ({ counter }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header_name}>Библиотека фильмов</div>
      <div className={styles.nav_links}>
        <div>
          <Link to={`/films/`}>Домашняя страница</Link>
        </div>
        <div>
          <Link to={`/films/favorite`}>Избранное {counter}</Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  counter: number,
};
export default Header;
