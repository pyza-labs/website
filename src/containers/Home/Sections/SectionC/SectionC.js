import React from "react";
import styles from "./SectionC.module.css";
import chat from "./chat.png";
import gradlyLogo from "../../../../assets/gradlyLogo.svg";

export const SectionC = () => {
  return (
    <div className={styles.sectionCContainer}>
      <div className={styles.imageTextContainer}>
        <div>
          <div className={styles.textTitle}>
            <img src={gradlyLogo} /> Lets Chat
          </div>
          <div className={styles.text}>
            <br></br>
            Building a White label chat interface which is<br></br> pluggable in
            your website.
          </div>
        </div>
        <img className={styles.image} src={chat} />
      </div>
    </div>
  );
};
