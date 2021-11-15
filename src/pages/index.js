/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import { Container, Col, Row } from "react-bootstrap";

import LeftSide from "../components/LeftSide";
import SEO from "../components/seo";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("UA-212838585-1");

const HomePage = () => {
  return (
    <Container fluid>
      <SEO title="Zachary Kirby"></SEO>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zachary Kirby</title>
      </Helmet>
      <Row className="main-row">
        <Col className={`left-col main-col col-12 col-md-12`}>
          <div className="side-container"><LeftSide /></div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;
