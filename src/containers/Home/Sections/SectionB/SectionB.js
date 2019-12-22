import React from "react";
import futbolConnectLogo from "../../../../assets/futbol-connectLogo.png";
import gradlyLogo from '../../../../assets/gradlyLogo.svg';
import football from "./football.jpeg";
import styles from "./SectionB.module.css";

const ProjectPreview = (props) => {
  return (
    <div aria-label={props.reverse ? 'reverse' : 'plain'} className={styles.projectPreviewContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.descriptionContainer}>
        <img alt="logo" src={props.logo} />
        <div className={styles.companyName}>
          <div>{props.name}</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.description}>
          {props.description}
        </div>
      </div>
    </div>
  );

}

export const SectionB = () => {
  return (
    <div className={styles.container}>
      <div id="work" className={styles.title}>
        Clients come to us with a<br></br>vision. We help them build it.
      </div>
      <ProjectPreview imageSrc={football} name="FutbolConnect" logo={futbolConnectLogo} description={
        <div>
          Building a "Social Network" for <br/> soccer lovers.
        </div>
      }/>
      <ProjectPreview reverse imageSrc={football} name="Gradly" logo={gradlyLogo} description={
        <div>
          One stop portal for your <br/> masters abroad.
        </div>
      }/>
    </div>
  );
};
