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
