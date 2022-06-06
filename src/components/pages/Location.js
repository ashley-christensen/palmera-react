import React, { useRef, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import locationData from '../../locationData';


const position = [17.0746557, -61.8175207];

const Location = () => {
 const mapRef = useRef(null);

 // event listener to handle marker click
 const handleClick = () => {
  mapRef.current._popup._closeButton.addEventListener('click', (event) => {
   event.preventDefault();
  });
 };

 useEffect(() => {
  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
   iconUrl: require("leaflet/dist/images/marker-icon.png"),
   shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });
 }, []);

 return (
  <section>
   <MapContainer
    style={{ width: '100%', height: '600px' }}
    className="map"
    center={position} zoom={11} scrollWheelZoom={false} ref={mapRef}>
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locationData.map((location) => {
     const { id, name, img, coordinates } = location;

     return (
      <Marker
       eventHandlers={{
        click: (e) => handleClick(),
       }}
       key={id}
       position={coordinates}

      >
       <Popup>
        <div className='card-map'>
         <div className='img-container'>
          <img src={img} className='map-img-top' alt="beach" />
         </div>
         <div className='map-body'>
          <div className='map-text'>
           <h5>{name}</h5>
          </div>
          <button className='btn btn-more btn-sm btn-color'>
           Learn more
          </button>
         </div>
        </div>
       </Popup>
      </Marker>
     );
    })}
   </MapContainer>
  </section >
 );
};

export default Location;