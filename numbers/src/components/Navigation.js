import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

  NavbarText,
} from 'reactstrap';
import navbrand from '../utils/images/navbrand.png';
import { NavLink } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}  className="navbar" expand="md">
        <NavbarBrand href="/">
        <img
        alt="logo"
        src={ navbrand }
        style={{
          height: 40,
          width: 40
        }}
      />
      Numbers
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/facts">FACTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/trivia">TRIVIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/practice">PRACTICE</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;