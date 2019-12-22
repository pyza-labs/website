import React from "react";
import image from "../../../../assets/sectionE.png";
import { Button } from "../../../../components/Button/Button";
import { ListCard } from "./ListCard";
import styles from "./SectionE.module.css";

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
      <div className={styles.title}>
        We build digital products, from idea to design and<br></br>development
        to marketing and PR to post-launch<br></br>support you have a partner in
        us.
      </div>
      <div className={styles.content}>
        <img src={image} />
        <div className={styles.contentDescription}>
          <div className={styles.listCard}>
            <ListCard title={"Ui/Ux Design"} listItems={uiUx} />
            <ListCard title={"Mobile App Development"} listItems={mobileApp} />
            <ListCard title={"Web Development"} listItems={webDevelopment} />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};
