<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, PageHeader, Panel, } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header" style={{marginTop:"-100px"}}>
        <PageHeader>
          <Navbar bsStyle="pills" className="small" collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">
                  <img src="images/FOE_logo.png" alt="2485Logo" style={{width:'150px',height:'120px', position:"relative", marginTop:"-45px"}}/>
                </a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/">
                  Home
                </NavItem>
                <NavItem eventKey={1} href="/membership">
                  Membership
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
              <Nav pullRight>
                <NavItem eventKey={6} href="https://www.facebook.com/Eagles2485/" target="_blank">
                  <span>
                    <i className="fa fa-facebook"></i>
                  </span>
                </NavItem>
                <NavItem eventKey={7} href="#" target="_blank">
                  <span>
                    <i className="fa fa-twitter"></i>
                  </span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </PageHeader>
      </div>
    );
  }
}

export default Header;
>>>>>>> f274eec62a0934e5bf4ed6463c52f5227a52c0db
