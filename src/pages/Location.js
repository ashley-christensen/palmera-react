import React, { useRef, useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CardPopup from '../components/CardPopup';
import Loading from '../components/Loading';

const position = [17.0746557, -61.8175207];

const Location = () => {
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);

 const mapRef = useRef(null);

 // event listener to handle marker click
 const handleClick = () => {
  mapRef.current._popup._closeButton.addEventListener('click', (event) => {
   event.preventDefault();
  });
 };

 const fetchData = async () => {
  setLoading(true);
  try {
   const response = await fetch('/locationData2.json');
   const locations = await response.json();
   console.log(locations);
   setData(locations);
  } catch (error) {
   setError(true);
   console.error(error.message);
  }
  setLoading(false);
 };

 useEffect(() => {
  fetchData();
  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
   iconUrl: require("leaflet/dist/images/marker-icon.png"),
   shadowUrl: require("leaflet/dist/images/marker-shadow.png")
  });
 }, []);


 return (
  <>
   <section className="location">
    <div>
     <MapContainer
      style={{ width: '100%', height: '600px' }}
      className="map"
      center={position} zoom={11} scrollWheelZoom={false} ref={mapRef}>
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {loading && <Loading />}
      {/* {error && <div>ERROR</div>} */}
      {!loading && data.locations.map((location) => {
       const { coordinates, id } = location;
       return (
        <Marker
         eventHandlers={{
          click: (e) => handleClick(),
         }}
         key={id}
         position={coordinates}
        >
         <Popup>
          <CardPopup {...location} />
         </Popup>
        </Marker>
       );
      })}
     </MapContainer>
    </div>
   </section>
  </>
 );
};

export default Location;