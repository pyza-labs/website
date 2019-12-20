import React from "react";
import styles from "./Button.module.css";
import iconDark from "../../assets/black.svg";
import iconLight from "../../assets/white.svg";

export const Button = props => {
  return (
    <div
      className={
        props.color ? styles.btnContainerLight : styles.btnContainerDark
      }
    >
      Get a Free Quote
      <img className={styles.img} src={props.color ? iconDark : iconLight} />
    </div>
  );
};
