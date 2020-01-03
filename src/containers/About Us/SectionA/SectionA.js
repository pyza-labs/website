import React from "react";
import styles from "./SectionA.module.css";

export const SectionA = () => {
  return (
    <div className={styles.sectionA}>
      <div className={styles.title}>
        Your partners through<br></br>the digital age.
      </div>
      <div className={styles.content}>
        <div className={styles.leftText}>
          <div className={styles.line}></div> About Us
        </div>
        <div className={styles.rightText}>
          <div>
            Pyza Labs builds products. We’re a mobile, tablet, watch,
            TV, and web design, development and marketing agency
            based in <b>Bengaluru City, India</b><br></br>
            <br></br>We follow best in class practices and latest development paradigms
            in the industry to provide you with an outstanding product.<br></br>
            <br></br> We can help with everything from initial app design and
            development through app marketing/PR and post-launch maintenance.
          </div>
        </div>
      </div>
    </div>
  );
};
