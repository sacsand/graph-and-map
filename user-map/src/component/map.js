import {useState,useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (  
  <div className={"circle"} >
    <span className="circleText">
      {text}
    </span>
  </div>
);

const Map = (props) => {

  const {latitude,longitude} = props.latlong

  const config = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 11
  }

  useEffect( () => {
    setMapConfig(config)
  },[props])

  const [mapConfig,setMapConfig] = useState(config)

  let mapBody = (
    <div style={{ height: '100vh', width: '100%' }}> <h3> No Location Data Found </h3> </div>
  )

  if(latitude && longitude){
    mapBody = (
      <div style={{ height: '100vh', width: '100%' }}>
        Lat : {mapConfig.center.lat}  -   Lng : {mapConfig.center.lng}
        <GoogleMapReact
          center={mapConfig.center}
          defaultZoom={mapConfig.zoom}
        >
          <Marker
            lat={mapConfig.center.lat}
            lng={mapConfig.center.lng}
            text={""}
          />
        </GoogleMapReact>
      </div>
    );   
  }

  return mapBody
}

export default Map;
