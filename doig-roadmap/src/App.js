import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import './App.scss';

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

  onAddButtonClick = props => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4', '5']
    }).queue([
      {
        title: 'Location Name',
        text: 'Enter the name of the location to add to the map'
      },
      {
        title: 'Latitude',
        text: 'Enter the latitude of the location'
      },
      {
        title: 'Longitude',
        text: 'Enter the longitude of the location'
      },
      {
        title: 'Date',
        text: 'Enter the date of the resource'
      },
      {
        title: 'Meta Data',
        text: 'Enter some meta data about this resource'
      }

    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Success!',
          type: 'success',
          html:
            'Your answers: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        });
      }
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <div><h2 className="title">Doig Roadmap</h2></div>
          <div className="addButton" onClick={this.onAddButtonClick}><FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/></div>
        </div>
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
           lat: 37.09024, 
           lng: -95.712891 
          }}
      >
      {data.markers.map(place => (
        <Marker
            onClick={this.onMarkerClick}
            position={{lat: place.lat, lng: place.lng}}
            
            name={place.locationName}
            date={place.date}
            info={place.info}
        >
        </Marker>
    ))}
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
            <a href="https://www.w3schools.com/html/">Photo</a>
          </div>
          {/* <Info></Info> */}
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GAPI_KEY}`
})(MapContainer);