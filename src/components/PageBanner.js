import React, { Component } from 'react';

class PageBanner extends Component {
  render() {
    return (
      <div className="banner">
        <h2 className="banner-title">
          { this.props.bannerTitle }
        </h2>
      </div>
    );
  }
};

export default PageBanner;
