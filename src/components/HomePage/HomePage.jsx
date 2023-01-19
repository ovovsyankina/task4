import React from "react";
import { func } from "prop-types";
import FilmListContainer from "../FilmList/FilmListContainer";
import styles from "./HomePage.module.scss";

const HomePage = ({ onModalAddOpen, setQuickViewOpen, onModalEditOpen }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container_films}>
        <div className={styles.all_films}>
          <FilmListContainer
            setQuickViewOpen={setQuickViewOpen}
            onModalEditOpen={onModalEditOpen}
            onModalAddOpen={onModalAddOpen}
          />
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  onModalAddOpen: func,
  setQuickViewOpen: func,
  onModalEditOpen: func,
};

export default HomePage;
