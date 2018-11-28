import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Directions extends Component {
  render() {
    return (
      <div>
        <Panel>
          <h2>Directions</h2>
          <div>
            <img alt="directions" src="/images/dir.png"></img>
            <img alt="map" src="/images/map.png"></img>
          </div>
        </Panel>
      </div>
    );
  }
}

export default Directions;
