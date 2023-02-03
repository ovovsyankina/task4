import React from "react";
import styles from "./SnackBar.module.scss";
const SnackBar = ({ isActiveSnackBar }) => {
  return (
    isActiveSnackBar && (
      <div className={styles.root}>Такого фильма не существует... </div>
    )
  );
};

export default SnackBar;
