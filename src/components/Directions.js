<<<<<<< HEAD
import React, { Component } from 'react';

class Directions extends Component {
  render() {
    return (
      <div>
        <h2>Directions</h2>
        <div>
          <img src="/images/dir.png"></img>
          <img src="/images/map.png"></img>
        </div>
      </div>
    );
  }
}

export default Directions;
=======
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
>>>>>>> f274eec62a0934e5bf4ed6463c52f5227a52c0db
