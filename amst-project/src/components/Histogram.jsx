import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalRectSeries, VerticalGridLines, Crosshair, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

export default class Histogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
          crosshairValues: ["asdf"]
        };
      }
  render() {
    return (
      <div className="histogram-wrapper">
        <XYPlot height={300} width= {1200}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalRectSeries data={this.props.data.eras} color={"blue"}/>
            <LineSeries data={this.props.data.plot}/>
            <Crosshair values={this.state.crosshairValues}>
  <div style={{background: 'black'}}>
    <h3>Values of crosshair:</h3>
    <p>Series 1:</p>
    <p>Series 2:</p>
  </div>
</Crosshair>
        </XYPlot>
      </div>
    );
  }
}