<<<<<<< HEAD
import React, { Component } from 'react';
import { news_data } from '../data/news_data';
import { Jumbotron, Button } from 'react-bootstrap';

class News extends Component {
  renderList() {
    return news_data.map((item) => {
        return (
          <div key={item.id} className="news-item">
          <div className="news-item-date">
            {item.date}
          </div>
          <div className="news-item-title">
            {item.title}
          </div>
          <div className="news-item-content">
            {item.content}
          </div><br/>
          </div>
        );
    });
  }

  render() {
    return (
      <div>
        <h2>News</h2>
        <Jumbotron>
          <h1>Trunk or Treat!</h1>
          <p>
            Wednesday, October 31st
          </p>
          <p>
            Fun, family friendly Halloween event held in our parking lot. Bring your kids in their Halloween 
            costumes and trick or treat at cars that are also "dressed up" for Halloween.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default News;
=======
import React, { Component } from 'react';
import { news_data } from '../data/news_data';
import { Jumbotron, Button, Panel, Col } from 'react-bootstrap';
import Newsletters from './Newsletters';
import PageBanner from './PageBanner';

class News extends Component {
  renderList() {
    return news_data.map((item) => {
        return (
          <div key={item.id} className="news-item">
          <div className="news-item-date">
            {item.date}
          </div>
          <div className="news-item-title">
            {item.title}
          </div>
          <div className="news-item-content">
            {item.content}
          </div><br/>
          <hr></hr>
          </div>
        );
    });
  }

  render() {
    return (
      <div>
        <PageBanner bannerTitle="News" />
        <div style={{width:"80%", margin:"auto"}}>
          <Col xs={12} md={10}>
            <Jumbotron>
              <h1>Trunk or Treat!</h1>
              <p>
                Wednesday, October 31st
              </p>
              <p>
                Fun, family friendly Halloween event held in our parking lot. Bring your kids in their Halloween 
                costumes and trick or treat at cars that are also "dressed up" for Halloween.
              </p>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col xs={6} md={2}>
            <Newsletters />
          </Col>
          <Col xs={12}>
            <div>
              {this.renderList()}
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

export default News;
>>>>>>> f274eec62a0934e5bf4ed6463c52f5227a52c0db
