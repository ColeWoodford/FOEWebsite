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
