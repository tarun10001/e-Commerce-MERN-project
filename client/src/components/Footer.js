import React from "react";
import {
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "../index.css";

const Footer = () => {
  return (
    <footer>
      <Container className="we">
        <Card>
          <Row className="m-auto icons p-1">
            <i className="fa-solid fa-envelope m-3"></i>
            <i className="fa-brands fa-linkedin m-3"></i>
            <i className="fa-brands fa-twitter m-3"></i>
            <i className="fa-brands fa-instagram m-3"></i>
          </Row>

          <Row>
            <Col className="text-center">
            ©Copyright 2022 : By TARUN KUMAWAT. All Rights Reserved
            </Col>
          </Row>
        </Card>
      </Container>
    </footer>
  );
};


export default Footer;