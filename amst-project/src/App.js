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
    console.log(eraId)

    data.eras.forEach(era => {
      era.opacity = .5; //Resets Opacity
    });

    var found = data.eras.findIndex(function(element) {
      console.log(element.id);
      return element.id === eraId;
    });

    data.eras[found].opacity = 1;

    console.log(found)
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
                      style={{ backgroundColor: era.rgb, color: "white", opacity: era.opacity}} 
                      onClick={() => this.handleClick(era.id)}
                      key={era.id}
                      className="btn m-2 canning-button"
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
            <Histogram customClick={this.handleClick} data={data} />
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
}
