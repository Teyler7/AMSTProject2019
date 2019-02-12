import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default class LocationsList extends Component {
  render() {
    return (
        <div className="list">
            <h3 className="title">Locations:</h3>
            {this.props.markerData.map((marker, index) => {
              return (
                <div  onClick={() => this.props.onClick(this.props.data[index], marker)} className="list-container" key={index}>
                <FontAwesomeIcon icon={faMapPin} color="red"/><span className="list-element">{marker.name}</span>
                </div>
              )
            })}
        </div> 
    );
  }
}