import React, { Component } from 'react';
import { Navbar, Nav, NavItem, PageHeader, Panel } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <Panel>
            <a href="/">
              <img src="images/FOE_logo.png" alt="2485Logo" style={{width:'150px',height:'120px', position:"relative"}}/>
            </a>

            <Nav bsStyle="pills">
              <NavItem class="nav justify-content-end" eventKey={1} href="/">
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
            
          </Panel>
        </PageHeader>

        <Navbar>
            <Nav>
              <NavItem>
                <a href="/">
                  <img src="images/2485_Logo-150x120.jpg" alt="2485Logo" style={{width:'150px',height:'120px', position:"relative"}}/>
                </a>
              </NavItem>
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
        </Navbar>
      </div>
    );
  }
}

export default Header;
