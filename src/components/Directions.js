import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import PageBanner from './PageBanner';

class Directions extends Component {
  render() {
    return (
      <div>
        <PageBanner bannerTitle="Directions" />
        <Panel>
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
