import React from "react";
import styles from "./SectionG.module.css";
import image from "../../../../assets/SectionG.jpg";
import map from "../../../../assets/Map.png";

export const SectionG = () => {
  return (
    <div className={styles.sectionGContainer}>
      <img className={styles.map} src={map} />
      <img className={styles.image} src={image} />
    </div>
  );
};
