import React from "react";
import { Col, Container, Row } from "reactstrap";
import image1 from "../../../assets/AboutUs1.png";
import image2 from "../../../assets/AboutUs2.png";
import image3 from "../../../assets/AboutUs3.png";
import Styles from './SectionB-C.module.css';

export const SectionBC = () => {
  return (
    <Container fluid className={Styles.container}>
      <Row>
        <Col className="d-flex align-items-center justify-content-center mb-5 mb-md-0" md={{ size: 4, offset: 0 }} sm={{ size: 6, offset: 2 }}>
          <img width="60%" alt="Act" src={image3} />
        </Col>
        <Col md={{ size: 4, offset: 0 }} className="mt-5 mt-md-0 d-flex align-items-center justify-content-center mb-5 mb-md-0" sm={{ size: 6, offset: 2 }}>
          <img width="90%" alt="Plan" src={image2} />
        </Col>
        <Col md={{ size: 4, offset: 0 }} className="mt-5 mt-md-0 d-flex align-items-center justify-content-center" sm={{ size: 6, offset: 2 }}>
          <img width="60%" alt="Build" src={image1} />
        </Col>
      </Row>
    </Container>
  );
};
