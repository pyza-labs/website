import React from "react";
import styles from "./SectionE.module.css";
import image from "../../../../assets/sectionE.png";
import { ListCard } from "./ListCard";
import { Button } from "../../../../components/Button/Button";

export const SectionE = () => {
  const uiUx = [
    "Design Sprints",
    "Research",
    "User Interface Design",
    "Mobile Design"
  ];
  const mobileApp = ["iOS", "Android", "React Native"];
  const webDevelopment = ["Ruby on Rails", "React", "Security"];

  return (
    <div className={styles.sectionEContainer}>
      <div className={styles.text}>
        We build digital products, from idea to design and<br></br>development
        to marketing and PR to post-launch<br></br>support you have a partner in
        us.
      </div>
      <div className={styles.imageTextContainer}>
        <img src={image} />
        <div className={styles.listCard}>
          <ListCard title={"Ui/Ux Design"} listItems={uiUx} />
          <ListCard title={"Mobile App Development"} listItems={mobileApp} />
          <ListCard title={"Web Development"} listItems={webDevelopment} />
          <div className={styles.btn}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};
