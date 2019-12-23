import React from "react";
import { Button } from "../../../../components/Button/Button";
import image from "../../../../assets/avatar.png";
import styles from "./SectionD.module.css";

export const SectionD = () => {
  return (
    <div className={styles.sectionDContainer}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.text}>
        "We are grateful to have PyzaLabs as our<br></br> go to agency"
      </div>
      <div className={styles.nameTitle}>Rishabh Singh</div>
      <div className={styles.nameText}>CEO & Founder@Gradly</div>
      <Button />
    </div>
  );
};
