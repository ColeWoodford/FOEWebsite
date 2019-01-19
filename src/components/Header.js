import React, { Component } from 'react';
import { Navbar, Nav, NavItem, PageHeader } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <a href="/">
            <img src="images/2485_Logo-150x120.jpg" alt="2485Logo" style={{width:'150px',height:'120px', position:"relative"}}/>
          </a>
          Fraternal Order of Eagles <small>Kennewick #2485</small>
        </PageHeader>
        <Navbar>
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
      </div>
    );
  }
}

export default Header;
