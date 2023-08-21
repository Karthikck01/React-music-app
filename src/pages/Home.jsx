import React from "react";
import CarouselComponent from "../components/carousel";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center flex-sm-wrap  flex-sm-nowrap flex-wrap landing-page"
      style={{ height: `${innerHeight - 56}px` }}
    >
      <div className="landing-page-text">
        <div className="display-1 fw-bolder my-3">Play, Enjoy</div>
        <div className="h1 fw-bolder text-secondary">Your Music, Your Way</div>
        <p className="fw-semibold text-opacity-75 text-secondary">
          SoundFusion empowers you to explore music on your terms. <br />
          Whether you're seeking relaxation, motivation, or pure <br />
          entertainment, our platform adapts to your desires.
        </p>
        <div className="d-flex justify-content-start align-items-center my-5">
          <Button variant="danger">Click here</Button>
          <span className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mx-5">
            MY PROJECTS
          </span>
        </div>
      </div>
      <div className="cor">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Home;
