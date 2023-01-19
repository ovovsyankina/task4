import classNames from "classnames";
import { number, bool } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = ({ counter, isFavorites }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header_name}>Библиотека фильмов</div>
      <div className={styles.nav_links}>
        <div
          className={classNames({
            [styles.active_link]: !isFavorites,
          })}
        >
          <Link to={`/`}>Домашняя страница</Link>
        </div>
        <div className={styles.favorite_link}>
          <div
            className={classNames(styles.favorite_link, {
              [styles.active_link]: isFavorites,
            })}
          >
            <Link to={`/favorite`}>Избранное</Link>
          </div>
          <div className={styles.favorite_counter_circle}>{counter}</div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  counter: number,
  isFavorites: bool,
};

export default Header;
