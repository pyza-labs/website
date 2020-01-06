import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Button } from "../../../../components/Button/Button";
import Styles from "./SectionA.module.css";

export const SectionA = () => {
  return (
    <Container fluid className={Styles.container}>
      <Row className="align-items-center">
        <Col>
          <div className={Styles.titleText}>
            Next level products,<br></br>
            Delivered.
          </div>
          <div className={Styles.sectionAText}>
            We help brands and companies create outstanding<br></br> products.
          </div>
          <Button color />
        </Col>
      </Row>
    </Container>
  );
};
