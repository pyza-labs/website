import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Button } from "../../../../components/Button/Button";
import Styles from "./SectionA.module.css";

export const SectionA = () => {
  return (
    <Container fluid className={Styles.container}>
      <Row className="align-items-center">
        <Col md="12 mb-5" lg={{ size: 10, offset: 1 }}>
          <div className={Styles.titleText}>
            Next level products,
            Delivered.
          </div>
          <div className={Styles.sectionAText}>
            We help brands and companies create outstanding<br></br> products.
          </div>
          <Button light />
        </Col>
      </Row>
    </Container>
  );
};
