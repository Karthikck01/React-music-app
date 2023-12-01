import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import ThemeButton from "./ThemeButton";

const NavbarComponent = ({ theme }) => {
  return (
    <Navbar bg={theme} expand="lg" className="shadow-sm z-3">
      <Container className=" d-flex justify-content-between">
        <Navbar.Brand>SoundFusion</Navbar.Brand> 
          <ThemeButton />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
