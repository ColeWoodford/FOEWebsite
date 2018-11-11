import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src="images/2485_Logo-150x120.jpg" alt="2485Logo" style={{width:'30%',height:'100%', position:"relative"}}/>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem eventKey={2} href="/news">
            News
          </NavItem>
          <NavItem eventKey={3} href="/calendar">
            Calendar
          </NavItem>
          <NavItem eventKey={4} href="/directions">
            Directions
          </NavItem>
          <NavItem eventKey={5} href="/contact">
            Contact Us
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
