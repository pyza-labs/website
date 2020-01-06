import React from "react";
import iconDark from "../../assets/black.svg";
import iconLight from "../../assets/white.svg";
import styles from "./Button.module.css";

export const Button = props => {
  return (
    <div
      className={
        props.color ? styles.btnContainerLight : styles.btnContainerDark
      }
    >
      <a className={styles.text} href="/contact">
        Get a Free Quote
      </a>
      <img className={styles.img} src={props.color ? iconDark : iconLight} />
    </div>
  );
};
