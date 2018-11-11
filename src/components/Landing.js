import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the official website of FOE 2485! </h2>
        <h2>We are located at 115 N. Fruitland in Kennewick, WA </h2>
        <h3>HOURS</h3>
        <div>
          <u>Social Hall</u>
          <p>
            Tuesday 4 PM until Aerie and Auxiliary Meetings conclude<br/>
            Thursday - Friday - Saturday 4 PM<br/>
            The lounge may OPEN earlier for special events or Close early due to Holidays.<br/>
          </p>
          <u>Annex</u>
          <p>
            Mon/Tue/Wed   4:00 pm<br/>
            Thurs/Fri           5:00 pm<br/>
            Sat/Sun             1:00 pm<br/><br/>
            HAPPY HOUR 4PM – 6PM<br/>
          </p>
          <p>
            To learn more about or join the Fraternal Order of Eagles check out https://www.foe.com/ or stop by our aerie. We always 
            love to talk about what we do!
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
