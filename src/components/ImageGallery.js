import galleryData from '../galleryData';


const ImageGallery = () => {

 return (
  <div class="container my-5">
   <h2 className='header-sections text-center display-6 my-5'> Image Gallery</h2>
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
 );
};

export default ImageGallery;


