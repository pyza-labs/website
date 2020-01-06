import React from "react";
import { Col, Container, Row } from 'reactstrap';
import image from "../../../../assets/sectionE.png";
import { Button } from "../../../../components/Button/Button";
import { ListCard } from "./ListCard";
import styles from "./SectionE.module.css";

export const SectionE = () => {
  const uiUx = [
    "Design Sprints",
    "Research",
    "User Interface Design",
    "Mobile Design"
  ];
  const mobileApp = ["iOS", "Android", "React Native"];
  const webDevelopment = ["Ruby on Rails", "React", "Security"];

  return (
    <Container fluid>
      <Row>
        <Col lg={{ offset: 1, size: 8 }} md={{ offset: 1, size: 10 }}>
          <div className={styles.title}>
            We build digital products, from idea to design and development
            to marketing and PR to post-launch support you have a partner in
            us.
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col lg={{ size: 6 }} md="12">
          <img width="100%" alt="about us" src={image} />
        </Col>
        <Col className="mt-4" lg={{ size: 4, offset: 1 }} md={{ size: 10, offset: 1 }}>
          <Container>
            <Row>
              <Col>
                <ListCard title={"Ui/Ux Design"} listItems={uiUx} />
              </Col>
              <Col className="mt-sm-4 mt-md-0">
                <ListCard title={"Mobile App Development"} listItems={mobileApp} />
              </Col>
              <div className="w-100"></div>
              <Col className="mt-4">
                <ListCard title={"Web Development"} listItems={webDevelopment} />
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <Button />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
