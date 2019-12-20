import React from "react";
import styles from "./SectionB.module.css";
import football from "./football.jpeg";
import futballConnectLogo from "../../../../assets/futbol-connectLogo.png";

export const SectionB = () => {
  return (
    <div>
      <div className={styles.sectionBContainer}>
        Clients come to us with a<br></br>vision. We help them build it.
      </div>
      <div className={styles.imageTextContainer}>
        <img src={football} />
        <div className={styles.textTitle}>
          <img src={futballConnectLogo} />
          Futbol Connect
          <div className={styles.text}>
            <br></br>
            Building a social network for<br></br> Football lovers.
          </div>
        </div>
      </div>
    </div>
  );
};
