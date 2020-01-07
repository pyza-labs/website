import React from "react";
import { Col, Container, Row } from "reactstrap";
import charts from "../../../assets/charts.png";
import graph from "../../../assets/graph.png";
import paper from "../../../assets/paper.png";
import { Button } from "../../../components/Button/Button";
import styles from "./SectionE.module.css";

export const SectionE = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col md={{ size: 3, offset: 1 }} sm={{ size: 10, offset: 1 }} className="d-none d-md-flex align-items-center justify-content-center">
          <img width="80%" alt="charts" src={charts} />
        </Col>
        <Col md={{ size: 4, offset: 0 }} sm={{ size: 10, offset: 1 }} className="d-flex flex-column align-items-center mt-5 mt-md-0">
          <img width="80%" alt="paper" src={paper} />
          <div className={styles.title}>We can build your story</div>
          <div className={styles.text}>
            Through years we have partnered with great companies all over
            the world.
          </div>
          <Button />
        </Col>
        <Col md={{ size: 3, offset: 1 }} sm={{ size: 10, offset: 1 }} className="align-items-center justify-content-center d-none d-md-flex">
          <img width="80%" alt="graph" src={graph} />
        </Col>
      </Row>
    </Container>
  );
};
