import React, { useContext } from "react";
import CarouselComponent from "../components/carousel";
import { Row, Col, Container } from "react-bootstrap";
import {AppContext} from '../Context/GlobalContext';

const About = () => {
  const {darkMode} = useContext(AppContext)
  return (
    <Container style={{ height: `${innerHeight - 56}px` }}>
      <div className="display-5 text-center p-3 fw-bold">ABOUT</div>

      <Row className="my-2 mx-2">
      <Col className="rounded my-2 mx-2">
          <div className="h3 text-danger">
          Disclaimer
          </div>
          It's important to note that this Music React App is
          intended solely for personal use and as a means to exhibit my
          abilities as a web developer. The app is not intended for commercial
          use, distribution, or profit.
        </Col>
        <Col className="my-2 mx-2">
          <h4 className="text-danger">About Our Music React App </h4>
          Welcome to our Music React App, a project that reflects my passion for
          web API development and my love for music. This application is
          designed for personal use and serves as a showcase of my skills in
          creating dynamic and engaging web experiences.
        </Col>
        
      </Row>
      <Row className="my-2 mx-2">
      <Col className="my-2 mx-2">
          <h4 className="text-danger">Project Objective</h4>
          The main objective of this Music React App is to demonstrate my
          proficiency in web API integration and development. By creating a
          music streaming platform, I aim to showcase how I can leverage
          technology to bring together music enthusiasts and provide them with
          an interactive way to explore and enjoy their favorite songs.
        </Col>
        <Col className="my-2 mx-2">
          <h4 className="text-danger">Application Features</h4>
          Using React, I've crafted a user-friendly interface that allows you to
          search for artists, albums, and tracks effortlessly. Through API
          integration, the app fetches data about songs and artists, enabling
          users to discover new music and create personalized playlists.
        </Col>
        
      </Row>
      <Row className={`my-2 py-3 mx-2 rounded ${darkMode ? "text-bg-light": "text-bg-dark"}`}>
        <Col>
          <Row>
            <Col className="text-center">
              <strong className="text-danger h4">
                Credits to Music Owners and API Providers
              </strong>{" "}
              <br />I would like to extend my sincere gratitude to the following
              entities:
            </Col>
          </Row>
          <Row className="my-4 mx-2">
            <Col>
              <strong className="text-danger">Music Owners:</strong>
              The heartfelt music you've composed forms an integral part of this
              project. Your creations have inspired me to develop an app that
              celebrates your artistry.
            </Col>
            <Col>
              <strong className="text-danger"> API Providers: </strong>
              jio saavan: Your API services have been pivotal in making this
              project come to life. Your dedication to providing access to music
              data has enabled me to showcase my skills effectively.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
