<<<<<<< HEAD
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>
          <u>Phone Number</u><br/>
          (509) 586-1717<br/><br/>
          <u>Street Address</u><br/>
          115 N. Fruitland<br/>
          Kennewick, WA<br/><br/>
          <u>Mailing Address</u><br/>
          P.O. Box 6993<br/>
          Kennewick, WA  99336<br/><br/>
          <u>More Information</u><br/>
          Use this form to contact us to get more information about our club.<br/><br/>
        </div>
        <form>
          Your Name:&nbsp;
          <input></input><br/>
          Your Email Address:&nbsp;
          <input></input><br/>
          Your Phone Number:&nbsp;
          <input></input><br/>
          Comments:&nbsp;
          <input></input><br/>
          <button>Submit</button>
          <button>Reset</button>
        </form>
      </div>
    );
  }
}

export default Contact;
=======
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import PageBanner from './PageBanner';

class Contact extends Component {
  render() {
    return (
      <div>
        <PageBanner bannerTitle="Contact" />
        <Panel>
          <div>
            <u>Phone Number</u><br/>
            (509) 586-1717<br/><br/>
            <u>Street Address</u><br/>
            115 N. Fruitland<br/>
            Kennewick, WA<br/><br/>
            <u>Mailing Address</u><br/>
            P.O. Box 6993<br/>
            Kennewick, WA  99336<br/><br/>
            <u>More Information</u><br/>
            Use this form to contact us to get more information about our club.<br/><br/>
          </div>
          <form>
            <label>Your Name:</label>
            <input type="text" /><br/>
            <label>Your Email Address:</label>
            <input type="text" /><br/>
            <label>Your Phone Number:</label>
            <input type="text" /><br/>
            <label>Comments:</label>
            <textarea className="comment-box" /><br/>
            <input type="submit" value="Submit" />
            <input type="reset" />
          </form>
        </Panel>
      </div>
    );
  }
}

export default Contact;
>>>>>>> f274eec62a0934e5bf4ed6463c52f5227a52c0db
