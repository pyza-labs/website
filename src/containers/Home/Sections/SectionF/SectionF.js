import React from "react";
import research from "../../../../assets/analysis.svg";
import build from "../../../../assets/blueprint.svg";
import design from "../../../../assets/brush.svg";
import line from "../../../../assets/noun_dotted line_19124.svg";
import { Button } from "../../../../components/Button/Button";
import styles from "./SectionF.module.css";

export const SectionF = () => {
  return (
    <div className={styles.sectionFContainer}>
      <div className={styles.imageTextContainer}>
        <div className={styles.leftContainer}>
          <img alt="" src={research}></img>
          <div className={styles.title}>Research</div>
          <div className={styles.contentText}>
            You develop your idea we help you expand and together we will come
            up with a unique selling propositon to help you stand out.
          </div>
        </div>
        <div className={styles.centerContainer}>
          <img alt="" src={design}></img>
          <div className={styles.title}>Build</div>
          <div className={styles.contentText}>
            Simplicity is the ultimate sophistication. Work with our design team
            to create an elegant design that incorporates the latest UI and UX
            trends.
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img alt="" src={build}></img>
          <div className={styles.title}>Design</div>
          <div className={styles.contentText}>
            Deadlines are important to us. Our agile development cycle has clear
            milestones to ensure development happens on a timely basis.
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.endText}>
        How do we successfully transform an idea into a functioning product?
      </div>
      <Button />
    </div>
  );
};
