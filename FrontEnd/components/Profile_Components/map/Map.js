  
import React from 'react'
import GoogleMapReact from 'google-map-react'


import '../../../pages/Profiles/Sass/map.scss';




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
          bootstrapURLKeys={{ key: 'AIzaSyAjWexTkBOKquA-gxnB_TtqCO1mkX8i97c' }}
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