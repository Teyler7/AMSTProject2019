import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        return (
            <div>
            <h4>{this.props.data.name}</h4>
            <div>
              <div><b>
                {this.props.data.date}
              </b></div>
              <div>
                {this.props.data.info}
              </div>
            </div>
            <a href="https://www.w3schools.com/html/">Photo</a>
          </div>
        )
    }
}