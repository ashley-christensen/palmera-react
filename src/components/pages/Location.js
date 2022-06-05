import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import locationData from '../../locationData';

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
    {locationData.map((location) => {
     const { id, name, img_url, coordinates } = location;
     return (
      <Marker
       key={id}
       position={coordinates}>
       <Popup>
        <div className='card-map'>
         <div className='img-container'>
          <img src={img_url} className='card-img-top' />
         </div>
         <div className='card-body'>
          <div className='card-text'>
           <h5>{name}</h5>
          </div>
          <button className='btn btn-more btn-sm btn-color mt-2'>
           Learn more
          </button>
         </div>
        </div>
       </Popup>
      </Marker>
     );
    })}
    {/* <Marker position={[17.1229191, -61.8909245]}>
     <Popup>
      Galley Bay Beach <br /> to be customized
     </Popup>
    </Marker> */}
   </MapContainer>
  </section >
 );
};

export default Location;