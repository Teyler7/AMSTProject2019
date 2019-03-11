import React, { Component } from "react";
import "./sass/App.scss";
import pic from "./data/p16013coll27_428_medium.jpg";
import data from "./data/canningData.json";

import Header from "./components/Header";
//import List from "./components/List"
import Histogram from "./components/Histogram";
//const data = require('./data/canningData.json');

export default class App extends Component {
  state = {
    index: null
  };

  handleClick = eraId => {
    this.setState({ index: eraId });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container px-md, main-content">
          <div className="row">
            <div className="col">
              <h2>
                <u>Eras</u>
              </h2>
              <ul>
                {data.eras.map(era => (
                  <li>
                    <button
                      onClick={() => this.handleClick(era.id)}
                      key={era.id}
                      className="btn btn-outline-success m-2"
                    >
                      {era.eraName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <img className="picture" src={pic} alt="" />
            </div>
          </div>
          {/* <List markerData={this.state.}></List> */}
          <div className="row">
            <Histogram data={data} />
          </div>
          <div className="row">
            <div className="col">
              <h2>{this.handleTitle()}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{this.handleInfo()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleInfo() {
    if (this.state.index != null) {
      return data.eras[this.state.index].information;
    }
  }
  handleTitle() {
    if (this.state.index != null) {
      return data.eras[this.state.index].eraName;
    }
  }
}
