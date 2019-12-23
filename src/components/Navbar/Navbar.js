import { Link } from "@reach/router";
import React from "react";
import pyzaLogo from "../../assets/Logo.png";
import pyzaLogoOrange from "../../assets/LogoOrange.png";
import plusIcon from "../../assets/white.svg";
import styles from "./Navbar.module.css";

export const Navbar = props => {
  return (
    <div
      aria-label={props.dark ? "dark" : "light"}
      className={styles.container}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img alt="logo" src={props.dark ? pyzaLogoOrange : pyzaLogo} />
        </Link>
      </div>
      <div className={styles.work}>
        <Link to="/#work">Work</Link>
      </div>
      <div className={styles.process}>
        <Link to="/#process">Process</Link>
      </div>
      <div className={styles.services}>
        <Link to="/#services">Services</Link>
      </div>
      <div className={styles.quote}>
        <Link to="contact">
          <div className={styles.quoteButton}>
            Ask for a Free Quote!
            <img alt="+" src={plusIcon} />
          </div>
        </Link>
      </div>
      <div className={styles.aboutUs}>
        <Link to="about">About Us</Link>
      </div>
    </div>
  );
};
