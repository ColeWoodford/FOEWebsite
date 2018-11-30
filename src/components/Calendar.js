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
