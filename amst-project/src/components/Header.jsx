import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <div><h2 className="title">Canning in Montana: How Montana affected the world</h2></div>
            <div className="addButton"><FontAwesomeIcon icon={faWarehouse} size="2x"/></div>
      </div>
    );
  }
}