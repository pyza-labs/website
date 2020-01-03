import React from "react";
import futbol from "../../../../assets/futbol-connect.png";
import futbolConnectLogo from "../../../../assets/futbol-connectLogo.png";
import gradly from "../../../../assets/gradly.png";
import gradlyLogo from "../../../../assets/gradlyLogo.svg";
import styles from "./SectionB.module.css";

const ProjectPreview = props => {
  return (
    <div
      aria-label={props.reverse ? "reverse" : "plain"}
      className={styles.projectPreviewContainer}
    >
      <div className={styles.imageContainer}>
        <div className={styles.circle}>
          <img src={props.imageSrc} />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <img alt="logo" src={props.logo} />
        <div className={styles.companyName}>
          <div>{props.name}</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};

export const SectionB = () => {
  return (
    <div className={styles.container}>
      <div id="work" className={styles.title}>
        Clients come to us with a<br></br>vision. We help them build it.
      </div>
      <ProjectPreview
        imageSrc={futbol}
        name="FutbolConnect"
        logo={futbolConnectLogo}
        description={
          <div>
            Building a "Social Network" for <br /> soccer lovers.
          </div>
        }
      />
      <ProjectPreview
        reverse
        imageSrc={gradly}
        name="Gradly"
        logo={gradlyLogo}
        description={
          <div>
            One stop portal for your <br /> education abroad.
          </div>
        }
      />
    </div>
  );
};
