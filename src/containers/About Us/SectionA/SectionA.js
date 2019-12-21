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
            Pyza Labs builds products. We’re a 64-person mobile, tablet, watch,
            TV, AR/VR, IoT and web design, development and marketing agency
            based in New York City, Seattle and San Francisco.<br></br>
            <br></br> Over the last 7 years, we have partnered with enterprises,
            entrepreneurs and digital/full-service agencies to build over 250
            products across a multitude of devices.<br></br>
            <br></br> We can help with everything from initial app design and
            development through app marketing/PR and post-launch maintenance.
          </div>
        </div>
      </div>
    </div>
  );
};
