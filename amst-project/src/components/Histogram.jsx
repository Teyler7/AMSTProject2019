import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalRectSeries,
  VerticalGridLines,
  Crosshair,
  HorizontalGridLines,
  XAxis,
  YAxis
} from "react-vis";

export default class Histogram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [""],
      index: 0
    };
  }
  render() {
    return (
      <div className="histogram-wrapper">
        <XYPlot height={300} width={1100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalRectSeries
            data={this.props.data.eras}
            colorRange={[/*From Red*/ "#ff0000", "#0000ff" /*To Blue*/]}
            // opacity={0.50}
            onValueClick = {(data) => {
              console.log(data)
              this.props.customClick(data.id);
            }}
          />
          <LineSeries
            color={"black"}
            data={this.props.data.plot}
            onNearestX={(value, { index }) => {
              console.log(index);
              this.setState({
                crosshairValues: this.props.data.plot.map(d => d)
              });
              this.setState({ index: index });
            }}
          />
          <Crosshair values={this.state.crosshairValues}>
            <div style={{ background: "black" }}>
              <h2>Year: {this.state.crosshairValues[this.state.index].x}</h2>
              <h2>Count: {this.state.crosshairValues[this.state.index].y}</h2>
            </div>
          </Crosshair>
        </XYPlot>
      </div>
    );
  }
}
