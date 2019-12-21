import React from "react";
import logo from "../../assets/LogoOrange.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <img alt="Logo" className={styles.logo} src={logo} />
        <div></div>
        <div className={styles.openSource}>
          <div>OPEN SOURCE</div>
          <div className={styles.contentText}>
            <div>Github</div>
          </div>
        </div>
        <div className={styles.openSource}>
          <div>HIRE DEVELOPERS</div>
          <div className={styles.contentText}>
            <div>Node Developers</div>
            <div>React Developers</div>
            <div>React Native Developers</div>
            <div>iOS Developers</div>
            <div>Android Developers</div>
            <div>Full Stack Developers</div>
          </div>
        </div>
        <div className={styles.openSource}>
          <div>
            <div>HIRE TRANSLATORS <br/>& TRANSCRIBERS</div>
          </div>
          <div className={styles.contentText}>
            <div>Translation & Transcription</div>
            <div>Subtitling</div>
            <div>Content Writing</div>
            <div>Creative Writing</div>
            <div>Ghostwriting</div>
            <div>Fiction Writing</div>
            <div>Data Entry</div>
            <div>Language Experts-HindiEnglish</div>
          </div>
        </div>
        <div className={styles.openSourceSocial}>
          <div>
            <div>CONNECT</div>
            <div className={styles.social}>Social</div>
          </div>
          <div className={styles.socialText}>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>Medium</div>
          </div>
          <div className={styles.address}>
            <div>Our Office</div>
            <div>Indira Nagar, Bengaluru, India</div>
          </div>
          <div className={styles.address}>
            <div>Hire Us!</div>
            <a href="mailto:info@pyzalabs.com">info@pyzalabs.com</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        2018 © All rights reserved. Pyza Labs India Private Limited.
      </div>
    </div>
  );
};
