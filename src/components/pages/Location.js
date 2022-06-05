import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [17.1172, -61.8457];

const Location = () => {

 return (
  <section>
   <MapContainer
    style={{ width: '100%', height: '600px' }}
    className="map"
    center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   </MapContainer>
  </section>
 );
};

export default Location;