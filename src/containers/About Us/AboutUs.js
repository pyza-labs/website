import React from "react";
import styles from "./AboutUs.module.css";
import { SectionA } from "./SectionA/SectionA";
import { SectionB } from "./SectionB";
import { SectionC } from "./SectionC/SectionC";
import { SectionD } from "./SectionD/SectionD";
import { SectionE } from "./SectionE/SectionE";
import { SectionBC } from "./SectionB-C/SectionB-C";

export const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <SectionA />
      <SectionB />
      <SectionBC />
      <SectionC />
      <SectionD />
      <div className={styles.line}></div>
      <SectionE />
    </div>
  );
};
