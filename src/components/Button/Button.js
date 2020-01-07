import { Link } from '@reach/router';
import React from "react";
import iconDark from "../../assets/black.svg";
import iconLight from "../../assets/white.svg";
import styles from "./Button.module.css";

export const Button = props => {
  return (
    <Link data-type={props.light === true ? 'light' : 'dark'} to="/contact" className={styles.container}>
      <div className={styles.text} >
        Get a Free Quote
      </div>
      <img alt="plus" className={styles.img} src={props.light === true ? iconDark : iconLight} />
    </Link>
  );
};
