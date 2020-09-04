  
import React from 'react'
import GoogleMapReact from 'google-map-react'


import '../../Sass/map.scss';

const Marker = (props) => {
    const { color, name, id } = props;
    return (
        <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
};
const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChI3vJkg_P6JFZKVg9at3FtUZjxxI2lP8' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <Marker
            lat={location.lat}
            lng={location.lng}
            name={location.address}
            color="#2E9AFF"
          />
        </GoogleMapReact>
      </div>
    </div>
)
  export default Map