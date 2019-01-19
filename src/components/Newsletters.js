import React, { Component } from 'react';
import { ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Newsletters extends Component {
  render() {
    return (
      <div className="news-letters">
        <h2>Newsletters:</h2>
        <ButtonGroup vertical>
          <Button>August 2018</Button>
          <Button>September 2018</Button>
          <Button>October 2018</Button>
          <Button>November 2018</Button>
          <br></br>
          <Button>
            <img src="images/soar_logo.jpg" alt="2485Logo" style={{width:'100%',height:'100%', position:"relative"}}/>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default Newsletters;
