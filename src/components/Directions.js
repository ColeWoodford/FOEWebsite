import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Directions extends Component {
  render() {
    return (
      <div>
        <Panel>
          <h2>Directions</h2>
          <div>
            <img src="/images/dir.png"></img>
            <img src="/images/map.png"></img>
          </div>
        </Panel>
      </div>
    );
  }
}

export default Directions;
