import React from "react";
import styles from "./ContactUs.module.css";
import asterisk from "../../assets/asterisk.svg";
import { Button } from "../../components/Button/Button";
import avatar from "../../assets/avatar.png";

export const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.leftContainer}>
        <img alt="avatar" src={avatar} />
        <div className={styles.clientReview}>
          "Pyza Labs delivered on time,
          <br />
          within budget and went above and
          <br />
          beyond to make my app a success
          <br />
          with the new relaunch."
        </div>
        <div className={styles.clientName}>
          Rishabh Singh
          <div className={styles.clientDesignation}>CEO & Founder@Gradly</div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.headingRight}>Let's have a talk</div>
        <div className={styles.subHeadingRight}>
          We'd love to hear what you are working on. Drop us a note here and
          <br />
          we'll get back to you in 24 hours.
        </div>

        <form className={styles.formContainer}>
          <div className={styles.formSubContainer}>
            <div className={styles.subContainerLeft}>
              <div className={styles.name}>
                Your Name <img src={asterisk} />
              </div>
              <input className={styles.nameInput} />
              <div className={styles.phoneNumber}>
                Phone Number <img src={asterisk} />
              </div>
              <input className={styles.phoneNumberInput} />
            </div>
            <div className={styles.subContainerRight}>
              <div className={styles.emailAddress}>
                Email Address <img src={asterisk} />
              </div>
              <input className={styles.emailAddressInput} />
              <div className={styles.budgetRange}>
                Budget Range <img src={asterisk} />
              </div>
              <input className={styles.budgetRangeInput} />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.project}>
              Describe your Project <img src={asterisk} />
            </div>
            <input className={styles.projectInput} />
            <div className={styles.submitContainer}>
              <input type="checkbox" className={styles.checkBox} />
              <div className={styles.checkBoxText}>Yeah, i'm not a robot</div>
              <div className={styles.button}>
                <Button />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
