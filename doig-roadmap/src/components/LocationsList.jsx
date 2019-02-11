import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default class LocationsList extends Component {
  render() {
    return (
        <div className="list">
            <h3 className="title">Locations:</h3>
            {this.props.data.map(place => (
              <div className="list-container" key={place.id}>
              <FontAwesomeIcon icon={faMapPin} color="red"/><span className="list-element">{place.locationName}</span>
              </div>
            ))}
        </div> 
    );
  }
}