import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

export default class Histogram extends Component {
  render() {
    return (
      <div className="histogram-wrapper">
        <XYPlot height={300} width= {1200}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.props.data.plot} />
        </XYPlot>
      </div>
    );
  }
}