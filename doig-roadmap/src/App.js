import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

console.log(`${process.env.REACT_APP_GAPI_KEY}`);

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{
         lat: 37.09024,
         lng: -95.712891
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GAPI_KEY}`
})(MapContainer);