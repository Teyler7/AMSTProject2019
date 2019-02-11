import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        return (
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            <div>
              <div><b>
                {this.state.selectedPlace.date}
              </b></div>
              <div>
                {this.state.selectedPlace.info}
              </div>
            </div>
            <a href="https://www.w3schools.com/html/">Photo</a>
            </div>
        )
    }
}