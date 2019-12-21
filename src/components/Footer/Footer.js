import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/LogoOrange.png";

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <img className={styles.logo} src={logo} />
        <div></div>
        <div className={styles.openSourceText}>
          <div>OPEN SOURCE</div>
          <div className={styles.gitHub}>Github</div>
        </div>
        <div className={styles.openSource}>
          <div>HIRE DEVELOPERS</div>
          <div className={styles.contentText}>
            Node Developers<br></br>
            React Developers<br></br>
            React Native Developers<br></br>
            iOS Developers<br></br>
            Android Developers<br></br>
            Full Stack Developers<br></br>
          </div>
        </div>
        <div className={styles.openSource}>
          <div>
            HIRE TRANSLATORS<br></br>& TRANSCRIBERS
          </div>
          <div className={styles.contentText}>
            Translation & Transcription<br></br>
            Subtitling<br></br>
            Content Writing<br></br>
            Creative Writing<br></br>
            Ghostwriting<br></br>
            Fiction Writing<br></br>
            Data Entry<br></br>
            Language Experts-Hindi<br></br>English
          </div>
        </div>
        <div className={styles.openSourceSocial}>
          <div>
            CONNECT<br></br>
            <div className={styles.social}>Social</div>
          </div>
          <div className={styles.socialText}>
            Instagram<br></br>
            Facebook<br></br>
            Medium<br></br>
          </div>
          <div className={styles.address}>
            Our Office<br></br>
            <br></br>Indira Nagar, Bengaluru, India
          </div>
          <div className={styles.address}>
            <br></br>Hire Us!<br></br>
            <a href="">info@pyzalabs.com</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        2018 © All rights reserved. Pyza Labs India Private Limited.
      </div>
    </div>
  );
};
