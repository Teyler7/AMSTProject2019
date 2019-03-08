import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalRectSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

const DATA = [
  {x0: 1900, x: 1912, y: 4000},
  {x0: 1940, x: 1920, y: 4000}
]

export default class Histogram extends Component {
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
        </XYPlot>
      </div>
    );
  }
}