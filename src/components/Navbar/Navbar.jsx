import React from "react";
import Navlinks from "./Navlinks";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { SearchIcon } from "../../assets/icon";
import ThemeButton from "./ThemeButton";

const NavbarComponent = ({ theme }) => {
  return (
    <Navbar bg={theme} data-bs-theme={theme} className="shadow-sm z-3">
      <Container>
        <Navbar.Brand>SoundFusion</Navbar.Brand>
        <Navlinks />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="search"
            className="rounded-pill"
          />
          <Button variant="danger" className="rounded-pill mx-2">
            <SearchIcon />
          </Button>
        </Form>
        <ThemeButton />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
