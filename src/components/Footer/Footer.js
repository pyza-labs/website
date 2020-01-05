import React from "react";
import logo from "../../assets/LogoOrange.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <img alt="Logo" src={logo} />
        </div>
        <div className={styles.openSource}>
          <div>OPEN SOURCE</div>
          <div className={styles.contentText}>
            <a target="_blank" href="https://github.com/pyza-labs">
              Github
            </a>
          </div>
        </div>
        <div className={styles.openSource}>
          <div>HIRE DEVELOPERS</div>
          <div className={styles.contentText}>
            <a href="/contact">
              <div>Node Developers</div>
              <div>React Developers</div>
              <div>React Native Developers</div>
              <div>iOS Developers</div>
              <div>Android Developers</div>
              <div>Full Stack Developers</div>
            </a>
          </div>
        </div>
        <div className={styles.openSource}>
          <div>
            <div>
              HIRE TRANSLATORS <br />& TRANSCRIBERS
            </div>
          </div>
          <div className={styles.contentText}>
            <a href="/contact">
              <div>Translation & Transcription</div>
              <div>Subtitling</div>
              <div>Content Writing</div>
              <div>Creative Writing</div>
              <div>Ghostwriting</div>
              <div>Fiction Writing</div>
              <div>Data Entry</div>
              <div>
                Language Experts-Hindi
                <br />
                English
              </div>
            </a>
          </div>
        </div>
        <div className={styles.openSourceSocial}>
          <div className={styles.connect}>CONNECT</div>
          <div className={styles.connectContent}>
            <div className={styles.socialContainer}>
              <div className={styles.social}>Social</div>
              <div className={styles.socialText}>
                <div className={styles.instagram}>
                  <a target="_blank" href="https://www.instagram.com/pyzalabs">
                    Instagram
                  </a>
                </div>
                <div className={styles.facebook}>
                  <a target="_blank" href="https://www.facebook.com/pyzalabs">
                    Facebook
                  </a>
                </div>
                <div className={styles.medium}>
                  <a target="_blank" href="https://medium.com/@pyzalabs">
                    Medium
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.addressContainer}>
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
        </div>
      </div>
      <div className={styles.copyright}>
        2018 © All rights reserved. Pyza Labs India Private Limited.
      </div>
    </div>
  );
};
