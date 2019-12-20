import React from "react";
import styles from "./SectionD.module.css";
import image from "./images.png";
import { Button } from "../../../../components/Button/Button";

export const SectionD = () => {
  return (
    <div className={styles.sectionDContainer}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.text}>
        "We are grateful to have PyzaLabs as our<br></br> go to agency"
      </div>
      <div className={styles.nameTitle}>Rishab Singh</div>
      <div className={styles.nameText}>CEO & Director@Gradly</div>
      <Button />
    </div>
  );
};
