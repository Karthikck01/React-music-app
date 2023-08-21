import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React from "react";

const Navlinks = () => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3" defaultActiveKey="/">
      <Nav.Item>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 text-danger fw-bold" : "nav-link mx-4"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 text-danger fw-bold" : "nav-link mx-4"
          }
          to={"/songs"}
        >
          Songs
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link mx-4 text-danger fw-bold" : "nav-link mx-4"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </Nav.Item>
      {/* <Nav.Item>
        <NavLink className={ ({ isActive }) =>
          isActive? "nav-link mx-4 text-danger fw-bold" : "nav-link mx-4"} to={"/contact"}>
          Contact
        </NavLink>
      </Nav.Item> */}
    </Nav>
  );
};

export default Navlinks;
