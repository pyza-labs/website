import React from "react";
import styles from "./SectionA.module.css";
import { Button } from "../../../../components/Button/Button";

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
    </div>
  );
};
