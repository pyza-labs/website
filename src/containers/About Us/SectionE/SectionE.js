import React from "react";
import styles from "./SectionE.module.css";
import { Button } from "../../../components/Button/Button";

export const SectionE = () => {
  return (
    <div className={styles.sectionE}>
      <div className={styles.title}>We can build your story</div>
      <div className={styles.text}>
        Through years we have partnered with great<br></br>companies all over
        the world.
      </div>
      <Button />
    </div>
  );
};
