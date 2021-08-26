import React, { Component } from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const customizeMap = {
  position: 'relative',  
  width: '100%',
  height: '1500px',
  marginTop: '30px'
};

export class GoogleMapComponent extends Component {
  
    render() {
        return (
          <Map
            google={this.props.google}
            zoom={14}
            style={customizeMap}
            initialCenter={
              {
                lat: 0.31628, 
                lng: 32.58219
              }
            }
          />
        );
      }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBBDmpbYYVbAL0ha1CNcZKQ8xaqoHBQlkU'
})(GoogleMapComponent);