import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./SectionB.module.css";

const ProjectPreview = props => {
  return (
    <Row className={styles.projectPreviewContainer}>
      <Col sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 1, order: props.reverse ? 2 : 1 }}>
        <img width="100%" alt="preview" src={props.imageSrc} />
      </Col>
      <Col sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 1, order: props.reverse ? 1 : 2 }}>
        <Container className={styles.descriptionContainer}>
          <Row>
            <img alt="logo" src={props.logo} />
          </Row>
          <Row>
            <div className={styles.companyName}>
              <div>{props.name}</div>
              <div className={styles.line}></div>
            </div>
          </Row>
          <Row>
            <div className={styles.description}>{props.description}</div>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export const SectionB = () => {
  return (
    <Container fluid>
      <Row>
        <Col className={styles.title} lg={{ size: 8, offset: 2 }} md={{ size: 10, offset: 1 }}>
          Clients come to us with a vision. We help them build it.
        </Col>
      </Row>
      {/* <ProjectPreview
        imageSrc={futbolConnectMockup}
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
        imageSrc={futbolConnectMockup}
        name="Gradly"
        logo={gradlyLogo}
        description={
          <div>
            One stop portal for your <br /> education abroad.
          </div>
        }
      /> */}
    </Container>
  );
};
