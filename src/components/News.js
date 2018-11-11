import React, { Component } from 'react';
import { news_data } from '../data/news_data';

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
        <div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default News;
