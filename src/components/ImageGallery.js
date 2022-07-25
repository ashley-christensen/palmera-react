import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const ImageGallery = () => {
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);

 const fetchData = async () => {
  setLoading(true);
  try {
   const response = await fetch('/galleryData2.json');
   const images = await response.json();
   console.log(images);
   setData(images);
  } catch (error) {
   setError(true);
   console.error(error.message);
  }
  setLoading(false);
 };

 useEffect(() => {
  fetchData();
 }, []);

 if (error) {
  return <div>ERROR</div>;
 }

 return (
  <div className="image-gallery-section">
   <div class="container">
    <h2 className='header-sections text-center gallery-header display-6'> Image Gallery</h2>
    <ul class="image-gallery">
     {loading && <Loading />}
     {!loading && data.images.map((item) => {
      return (
       <li>
        <img src={item}
         // loading="lazy" 
         alt="" />
        {/* <div class="overlay"><span>title</span></div> */}
       </li>
      );
     })}
    </ul>
   </div>
  </div>
 );
};

export default ImageGallery;


