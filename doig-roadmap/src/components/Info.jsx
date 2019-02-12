import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

export default class Info extends Component {
    render() {
        let photoDom = []
        if (this.props.data.photos != null) {
            photoDom = this.props.data.photos.map((photo, index) => {
                return (
                    <FontAwesomeIcon key={index} className="photo" icon={faCameraRetro} color="blue" onClick={() => {this.onPhotoClick(photo)}}></FontAwesomeIcon>
                )
            })
        }
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
            {photoDom}
          </div>
        )
    }
}