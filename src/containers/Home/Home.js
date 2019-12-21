import React from "react";
import styles from "./Home.module.css";
import { SectionA } from "./Sections/SectionA";
import { SectionB } from "./Sections/SectionB";
import { SectionC } from "./Sections/SectionC/SectionC";
import { SectionD } from "./Sections/SectionD/SectionD";
import { SectionE } from "./Sections/SectionE/SectionE";
import { SectionF } from "./Sections/SectionF/SectionF";
import { SectionG } from "./Sections/SectionG/SectionG";
import { SectionH } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <SectionA />
      </div>
      <div>
        <SectionB />
      </div>
      <div>
        <SectionC />
      </div>
      <div>
        <SectionD />
      </div>
      <div>
        <SectionE />
      </div>
      <div>
        <SectionF />
      </div>
      <div>
        <SectionG />
      </div>
    </div>
  );
};
