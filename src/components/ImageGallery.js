import galleryData from '../galleryData';


const ImageGallery = () => {

 return (
  <div className="image-gallery-section">
   <div class="container">
    <h2 className='header-sections text-center gallery-header display-6'> Image Gallery</h2>
    <ul class="image-gallery">
     {galleryData.map((item) => {
      return (
       <li>
        <img src={item} alt="" />
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


