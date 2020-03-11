import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import Words from './views/Words'
import Numbers from './views/Numbers'
import getData from './data/getData'
import './App.css';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  dark: "#ffffff",
  light: "#000000",
};

export default class App extends Component {
  render() {
    getData();
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Route path="/words" component={Words}/>
          <Route path="/numbers" component={Numbers}/>
        </MuiThemeProvider>
      </Router>
      
    )
  }
}

