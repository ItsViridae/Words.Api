import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Words from './views/Words'
import Numbers from './views/Numbers'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/words" component={Words}/>
        <Route path="/numbers" component={Numbers}/>
      </Router>
      
    )
  }
}

