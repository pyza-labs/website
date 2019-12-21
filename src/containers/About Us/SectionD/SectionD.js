import React from "react";
import styles from "./SectionD.module.css";
import { Content } from "./Content/Content";

export const SectionD = () => {
  return (
    <div className={styles.sectionD}>
      <div className={styles.topContainer}>
        <div className={styles.leftText}>
          <div className={styles.line}></div>
          Doing your part
        </div>
        <div className={styles.rightText}>To make it all work...</div>
      </div>
      <Content />
    </div>
  );
};
