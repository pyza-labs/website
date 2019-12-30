import React from "react";
import styles from "./SectionB-C.module.css";
import image1 from "../../../assets/AboutUs1.png";
import image2 from "../../../assets/AboutUs2.png";
import image3 from "../../../assets/AboutUs3.png";

export const SectionBC = () => {
  return (
    <div className={styles.sectionBC}>
      <img src={image3} />
      <img src={image2} />
      <img src={image1} />
    </div>
  );
};
