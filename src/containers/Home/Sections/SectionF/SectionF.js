import React from "react";
import { Col, Container, Row } from "reactstrap";
import research from "../../../../assets/analysis.svg";
import build from "../../../../assets/blueprint.svg";
import design from "../../../../assets/brush.svg";
import { Button } from "../../../../components/Button/Button";
import styles from "./SectionF.module.css";

export const SectionF = () => {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 0 }} className="d-flex flex-column align-items-center">
          <img width="60%" alt="" src={research}></img>
          <div className={styles.title}>Research</div>
          <div className={styles.contentText}>
            You develop your idea we help you expand and together we will come
            up with a unique selling propositon to help you stand out.
          </div>
        </Col>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 0 }} className="d-flex flex-column align-items-center">
          <img className="mt-4 mt-md-0" width="60%" alt="" src={design}></img>
          <div className={styles.title}>Build</div>
          <div className={styles.contentText}>
            Simplicity is the ultimate sophistication. Work with our design team
            to create an elegant design that incorporates the latest UI and UX
            trends.
          </div>
        </Col>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 4, offset: 0 }} className="d-flex flex-column align-items-center">
          <img className="mt-4 mt-md-0" width="60%" alt="" src={build}></img>
          <div className={styles.title}>Design</div>
          <div className={styles.contentText}>
            Deadlines are important to us. Our agile development cycle has clear
            milestones to ensure development happens on a timely basis.
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className={styles.line}></div>
        </Col>
        <div className="w-100" />
        <Col className="d-flex justify-content-center">
          <div className={styles.endText}>
            How do we successfully transform an idea into a functioning product?
          </div>
        </Col>
        <div className="w-100" />
        <Col className="d-flex justify-content-center">
          <Button />
        </Col>
      </Row>
    </Container>
  );
};
