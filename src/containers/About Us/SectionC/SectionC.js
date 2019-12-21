import React from "react";
import styles from "./SectionC.module.css";

export const SectionC = () => {
  return (
    <div className={styles.sectionC}>
      <div className={styles.textLeft}>
        <div className={styles.line}></div>
        Our promise
      </div>
      <div className={styles.rightTextContainer}>
        <div className={styles.rightTextTitle}>The Pyza Labs Promise</div>
        <div className={styles.rightText}>
          At Pyza Labs, we understand that the decision to build a new product,
          and the team you choose to build it with, is a crucial, and even scary
          decision.<br></br>
          <br></br>
          That's why we give you our promise: to do our best, and always strive
          to do the right thing for your project, your users, and the team.
          <br></br>
          <br></br>
          We want you to think of us as your partners in the journey. So ask us
          anything!
        </div>
      </div>
    </div>
  );
};
