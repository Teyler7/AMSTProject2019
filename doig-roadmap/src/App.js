import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Swal from 'sweetalert2'

console.log(`${process.env.REACT_APP_GAPI_KEY}`);

const data = require('./markerData.json');

const mapStyles = {
  width: '100%',
  height: '75%'
};

export class MapContainer extends Component {
  componentDidMount(){
    //If missing 
    if (`${process.env.REACT_APP_GAPI_KEY}` === 'undefined'){
      Swal.fire('Missing .env','The application is missing a .env file that must contain a Google Maps API Key. Please refer to the .env.example file for more info', 'error');

    }
  }
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Doig Roadmap</h2>
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
           lat: 37.09024, 
           lng: -95.712891 
          }}
      >
      {/* array.forEach(element => {
        
      }); */}
        <Marker
          onClick={this.onMarkerClick}
          position={{lat: 40.736090, lng: -73.991230}}

          name={'19 Union Square West, New York'}
          date={'December, My dude'}
          info={'lkajsdf;lkajsdl;fkjasl;dkfjal;sdfjl;kasdjl;kfaslflsjkfd;lkasfjl;kasdf'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
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
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GAPI_KEY}`
})(MapContainer);