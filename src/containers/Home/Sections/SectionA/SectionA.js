import React from "react";
import { Button } from "../../../../components/Button/Button";
import styles from "./SectionA.module.css";

export const SectionA = () => {
  const light = true;
  return (
    <div className={styles.sectionAContainer}>
      <div className={styles.titleText}>
        Next level products,<br></br>
        Delivered.
      </div>
      <div className={styles.sectionAText}>
        We help brands and companies create outstanding<br></br> products.
      </div>
      <Button color={light} />
      <div className={styles.circle}>
        <svg viewBox="0 0 50 50">
          <circle cx="32" cy="16" r="25" fill="#FFF"/>
        </svg>
      </div>
    </div>
  );
};
