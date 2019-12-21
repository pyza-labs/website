import React from "react";
import styles from "./Content.module.css";

export const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.topContainer}>
        <div className={styles.number}>1.</div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTitle}>Be Nice</div>
          <div className={styles.rightText}>
            The best professionals love what they do. At Pyza Labs we aim to
            create an enjoyable workspace so that we can recruit and keep the
            very best. Working only with nice clients is part of that!
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.number}>2.</div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTitle}>Challenge Us</div>
          <div className={styles.rightText}>
            We love to be challenged! Please share your vision with us to a high
            creative and technical standard. Come to us with problems, so we can
            solve them together.
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.number}>3.</div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTitle}>Decide Promptly</div>
          <div className={styles.rightText}>
            In the world of software, we've learned it's often better to make
            the wrong decision than to make no decision at all. Wrong decisions
            can usually be corrected more easily than starting from scratch!
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.number}>4.</div>
        <div className={styles.rightContainer}>
          <div className={styles.rightTitle}>Send Feedback Early</div>
          <div className={styles.rightText}>
            Pyza Labs uses Lean design alongside agile development
            methodologies. This means we'll be seeking user feedback early,
            often, and for the life of project. Please help us obtain and
            address user feedback to increase your chances of success.
          </div>
        </div>
      </div>
    </div>
  );
};
