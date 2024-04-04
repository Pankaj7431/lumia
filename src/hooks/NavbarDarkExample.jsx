import React from 'react'
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavbarDarkExample() {
  return (
    <NavDropdown title="Dropdown" menuVariant="light" drop="">
      <NavDropdown.Item href="#action/3.1">
        <a href="">Action</a>
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
        <a href="">Another action</a>
      </NavDropdown.Item>
      <NavDropdown
        href="#action/3.3"
        title="Deep Dropdown"
        menuVariant="light"
        drop="end"
        className="px-3 text-gray hover:text-danger w-auto"
      >
        <a href=""></a>
        <NavDropdown.Item eventKey="1">
          <a href="">Action</a>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="2">
          <a href="">Another action</a>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="3">
          <a href="">Something else here</a>
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Item href="#action/3.4">
        <a href="">Dropdown6</a>
      </NavDropdown.Item>
    </NavDropdown>
  );
}

