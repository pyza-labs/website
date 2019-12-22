import React from "react";
import research from "../../../../assets/analysis.svg";
import build from "../../../../assets/blueprint.svg";
import design from "../../../../assets/brush.svg";
import line from "../../../../assets/noun_dotted line_19124.svg";
import { Button } from "../../../../components/Button/Button";
import styles from "./SectionF.module.css";

export const SectionF = () => {
  return (
    <div className={styles.sectionFContainer}>
      <div className={styles.title}>
        Our process is here to help<br></br>your business grow
      </div>
      <div id="process" className={styles.imgContainer}>
        <img className={styles.research} src={research} />
        <img className={styles.linea} src={line} />
        <img className={styles.design} src={design} />
        <img className={styles.lineb} src={line} />
        <img className={styles.build} src={build} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titlea}>
          Research
          <div className={styles.contentText}>
            You develop your idea we help you<br></br>expand it and together we
            will come up with<br></br>a unique selling proposition to help you
            <br></br>stand out.
          </div>
        </div>
        <div className={styles.titleb}>
          Design
          <div className={styles.contentText}>
            Simplicity is the ultimate sophistication.<br></br>Work with our
            design team to create an<br></br>elegant design that incorporates
            the latest UI<br></br>and UX trends.
          </div>
        </div>
        <div className={styles.titlec}>
          Build
          <div className={styles.contentText}>
            Deadlines are important to us. Our agile<br></br>development cycle
            has clear milestones to<br></br>ensure development happens on a
            timely
            <br></br>basis.
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.endText}>
        How do we successfully transform an idea into a functioning product?
      </div>
      <Button/>
    </div>
  );
};
