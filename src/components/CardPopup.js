import React from 'react';

const CardPopup = ({ img, name, url }) => {
 return (
  <div className='card-map'>
   <div className='img-container'>
    <img src={img} className='map-img-top' alt="beach" />
   </div>
   <div className='map-body'>
    <div className='map-text'>
     <h5>{name}</h5>
    </div>
    <a target="_blank" rel="noreferrer" href={url} >
     <button className='btn btn-more btn-sm btn-color' >
      Learn more
     </button>
    </a>
   </div>
  </div>
 );
};

export default CardPopup;