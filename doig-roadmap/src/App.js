import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Swal from 'sweetalert2'
import './App.scss';

import Header from "./components/Header"
import LocationsList from "./components/LocationsList"
import Info from './components/Info'

const data = require('./markerData.json');

const mapStyles = {
  width: '100%',
  height: '50%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerObjects: [],
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}     
    };

    this.onMarkerMounted = element => {
      this.setState(prevState => ({
        markerObjects: [...prevState.markerObjects, element.marker]
      }))
    };
  }

  componentDidMount(){
    //If missing 
    if (`${process.env.REACT_APP_GAPI_KEY}` === 'undefined'){
      Swal.fire('Missing .env','The application is missing a .env file that must contain a Google Maps API Key. Please refer to the .env.example file for more info', 'error');
    }
  }

  onMarkerClick = (props, marker, e) =>{
    console.log(props);
    console.log(marker);
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

  onPhotoClick = (photo) => {
    console.log("hi");
    console.log(photo);
}

  render() {
    return (
      <div>
        <Header></Header>
        <LocationsList onClick={this.onMarkerClick} data={data.markers}  markerData={this.state.markerObjects}></LocationsList>
      <Map
        google={this.props.google}
        zoom={3.5}
        style={mapStyles}
        initialCenter={{
           lat: 37.09024, 
           lng: -95.712891 
          }}
      >
      {data.markers.map(place => (
        <Marker
            ref={this.onMarkerMounted}
            key={place.id}
            onClick={this.onMarkerClick}
            position={{lat: place.lat, lng: place.lng}}
            
            name={place.locationName}
            date={place.date}
            info={place.info}
            photos={place.photos}
        >
        </Marker>    
    ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <Info data={this.state.selectedPlace}></Info>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GAPI_KEY}`
})(MapContainer);