import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const FeaturedDetail = ({ featured }) => {
 const navigate = useNavigate();
 const { img, title, description } = featured;




 return (
  <Container className='mt-5 mb-5'>
   <h1 className='text-uppercase mr-5 mb-4'>{title}</h1>
   <div className="container-feature">
    <img className='main-image' width='450' src={img} alt={title} />
    <div>
     <p className='ml-5'>{description}</p>
     <button onClick={() => navigate(-1)} className='btn btn-more btn-sm btn-color mt-2 ml-5'>
      Go Back
     </button>
    </div>
   </div>
  </Container >

 );
};

export default FeaturedDetail;
