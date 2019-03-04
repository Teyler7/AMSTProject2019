import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

export default class Header extends Component {

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
        <div className="header">
            <div><h2 className="title">Digital America 2019</h2></div>
            <div className="addButton" onClick={this.onAddButtonClick}><FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/></div>
      </div>
    );
  }
}