<<<<<<< HEAD
import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div>
        <h2>Calendar</h2>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=colesslawtruck%40gmail.com&amp;color=%2329527A&amp;ctz=America%2FLos_Angeles" style={{borderWidth:"0",width:"100%",height:"900px",frameborder:"0",scrolling:"no"}}></iframe>
      </div>
    );
  }
}

export default Calendar;
=======
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import PageBanner from './PageBanner';

class Calendar extends Component {
  render() {
    return (
      <div>
        <PageBanner bannerTitle="Calendar" />
        <Panel>
          <h2>Calendar</h2>
          <iframe title="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=colesslawtruck%40gmail.com&amp;color=%2329527A&amp;ctz=America%2FLos_Angeles" style={{borderWidth:"0",width:"100%",height:"900px",frameborder:"0",scrolling:"no"}}></iframe>
        </Panel>
      </div>
    );
  }
}

export default Calendar;
>>>>>>> f274eec62a0934e5bf4ed6463c52f5227a52c0db
