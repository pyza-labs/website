import React from "react";
import styles from "./SectionE.module.css";
import { Button } from "../../../components/Button/Button";
import charts from "../../../assets/charts.png";
import paper from "../../../assets/paper.png";
import graph from "../../../assets/graph.png";

export const SectionE = () => {
  return (
    <div className={styles.sectionE}>
      <div className={styles.images}>
        <img src={charts} />
        <img src={paper} />
        <img src={graph} />
      </div>
      <div className={styles.title}>We can build your story</div>
      <div className={styles.text}>
        Through years we have partnered with great<br></br>companies all over
        the world.
      </div>
      <Button />
    </div>
  );
};
