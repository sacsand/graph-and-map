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
  console.log(props)

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
    <div> <h3> No Location Data Found </h3> </div>
  )

  if(latitude && longitude){
    mapBody = (
      <div style={{ height: '100vh', width: '100%' }}>
        {mapConfig.center.lat}  -    {mapConfig.center.lng}
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z" }}
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
