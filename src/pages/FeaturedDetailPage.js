import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedDetail from '../components/FeaturedDetail';
import Loading from '../components/Loading';


const FeaturedDetailPage = () => {
 const { paramId } = useParams();

 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(true);
 const [featured, setFeatured] = useState(null);


 const fetchData = async () => {
  setLoading(true);
  try {
   const response = await fetch('/featuredData2.json');
   const features = await response.json();
   const featured = features.items.find(item => item.id === parseInt(paramId));
   setFeatured(featured);
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
  return <div>Error</div>;
 }

 return (
  <>
   {loading && <Loading />}
   {!loading && (<FeaturedDetail
    featured={featured}
   />)}
  </>

 );
};

export default FeaturedDetailPage;

