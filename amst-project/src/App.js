import React, { Component } from 'react';
import './sass/App.scss';

import Header from "./components/Header"
import List from "./components/List"
import Histogram from './components/Histogram';
const data = require('./data/canningData.json');

export default class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        {/* <List markerData={this.state.}></List> */}
        <Histogram></Histogram>
      </div>
    );
  }
}