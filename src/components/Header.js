import React, { Component } from 'react';
import { Navbar, Nav, NavItem, PageHeader, Panel, } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div style={{marginTop:"-100px"}}>
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
                <NavItem eventKey={6} href="https://www.facebook.com/Eagles2485/">
                  <span>
                    <i className="fa fa-facebook"></i>
                  </span>
                </NavItem>
                <NavItem eventKey={7} href="#">
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
