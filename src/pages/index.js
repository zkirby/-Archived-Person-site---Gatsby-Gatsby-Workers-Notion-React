/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import { Container, Col, Row } from "react-bootstrap";

import LeftSide from "../features/LeftSide";
import SEO from "../features/seo";
import PageWrapper from "../features/shared/PageWrapper";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPosts from "../features/posts/AllPosts";

ReactGA.initialize("UA-212838585-1");

const HomePage = () => {
  return (
    <PageWrapper pageName="home">
      <Container fluid>
        <SEO title="Zachary Kirby"></SEO>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zachary Kirby</title>
        </Helmet>
        <Row className="main-row">
          <Col className={`left-col main-col col-8 col-md-8`}>
            <div className="side-container"><LeftSide /></div>
          </Col>
          <Col className="main-col col-4 col-md-4">
            <h2 className="mt-5">Writings</h2>
            <AllPosts />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}

export default HomePage;
