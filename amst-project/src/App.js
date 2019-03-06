import React, { Component } from 'react';
import './App.scss';

import Header from "./components/Header"
import List from "./components/List"
const data = require('./data/canningData.json');

export default class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        {/* <List markerData={this.state.}></List> */}
      </div>
    );
  }
}