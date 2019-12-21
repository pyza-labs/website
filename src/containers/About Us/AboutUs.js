import React from "react";
import styles from "./AboutUs.module.css";
import { SectionA } from "./SectionA/SectionA";
import { SectionB } from "./SectionB";
import { SectionC } from "./SectionC/SectionC";
import { SectionD } from "./SectionD/SectionD";
import { SectionE } from "./SectionE/SectionE";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <SectionA />
      <SectionB />
      <div className={styles.line}></div>
      <SectionC />
      <SectionD />
      <SectionE />
      <div className={styles.line}></div>
    </div>
  );
};
