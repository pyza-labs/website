import { Link } from "@reach/router";
import React from "react";
import pyzaLogo from "../../assets/Logo.png";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href="">
          <img src={pyzaLogo} />
        </a>
      </div>
      <div className={styles.work}>
        <a href="">Work</a>
      </div>
      <div className={styles.process}>
        <a href="">Process</a>
      </div>
      <div className={styles.services}>
        <a href="">Services</a>
      </div>
      <div className={styles.quote}>
        <a href="">Ask for a Free Quote!</a>
        <a href="" className={styles.plusIcon}></a>
      </div>
      <div className={styles.aboutUs}>
        <Link to="about">About Us</Link>
      </div>
    </div>
  );
};
