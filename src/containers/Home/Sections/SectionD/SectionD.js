import React from "react";
import { Col, Container, Row } from "reactstrap";
import avatar from "../../../../assets/avatar.png";
import { Button } from "../../../../components/Button/Button";
import Styles from "./SectionD.module.css";

export const SectionD = () => {
  return (
    <Container className={Styles.container}>
      <Row className="d-flex align-items-center" noGutters>
        <Col>
          <img className={Styles.avatar} alt="avatar" src={avatar} />
        </Col>
        <div className="w-100" />
        <Col className={["ml-auto", Styles.text].join(' ')}>
          "We are grateful to have PyzaLabs as our go to agency"
        </Col>
        <div className="w-100" />
        <Col className={["ml-auto", Styles.nameTitle].join(' ')}>
          Rishabh Singh
        </Col>
        <div className="w-100" />
        <Col className={["ml-auto", Styles.nameText].join(' ')}>
          CEO & Founder@Gradly
        </Col>
        <div className="w-100" />
        <Col className="ml-auto d-flex justify-content-center">
          <Button />
        </Col>
      </Row>
    </Container>
  );
};
