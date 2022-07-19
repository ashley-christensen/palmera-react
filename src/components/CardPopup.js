

const CardPopup = (location) => {
 const { name, img, url } = location;
 return (
  <div className='card-map'>
   <div className='img-container'>
    <img src={img} className='map-img-top' alt={name} />
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
    <button onClick={(name) => {
     console.log(name);
    }} className='btn btn-more btn-sm btn-success' >
     Favorite
    </button>
   </div>
  </div>
 );
};

export default CardPopup;