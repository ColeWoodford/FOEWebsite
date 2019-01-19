import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import News from './News';
import Calendar from './Calendar';
import Directions from './Directions';
import Contact from './Contact';
import '../App.css';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/news" component={News} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/directions" component={Directions} />
            <Route path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
