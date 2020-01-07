import React from "react";
import avatar from "../../assets/avatar.png";
import styles from "./ContactUs.module.css";

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
        <div className={styles.clientName}>Rishabh Singh</div>
        <div className={styles.clientDesignation}>CEO & Founder@Gradly</div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.headingRight}>Let's have a talk</div>
        <div className={styles.subHeadingRight}>
          We'd love to hear what you are working on. Drop us a note here and
          we'll get back to you in 24 hours.
        </div>

        <form method="POST" action="https://formsubmit.co/1fedb305b79e2d91291f21386a655ef4" className={styles.formContainer}>
          <div className={styles.formSubContainer}>
            <div className={styles.subContainerLeft}>
              <input
                required
                name="name"
                placeholder="Your Name*"
                className={[styles.nameInput]}
              />
              <input
                required
                name="phone"
                placeholder="Phone Number*"
                className={styles.phoneNumberInput}
              />
            </div>
            <div className={styles.subContainerRight}>
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address*"
                className={styles.emailAddressInput}
              />
              <input
                required
                name="budget"
                placeholder="Budget Range*"
                className={styles.budgetRangeInput}
              />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <input
              name="projectDescription"
              required
              placeholder="Describe your project*"
              className={styles.projectInput}
            />
            <div className={styles.submitContainer}>
              <input
                required
                name="robot"
                type="checkbox"
                className={styles.checkBox}
              />
              <div className={styles.checkBoxText}>Yeah, i'm not a robot</div>
              <input
                type="submit"
                value="Send Message"
                className={styles.button}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
