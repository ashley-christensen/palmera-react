import { useParams } from 'react-router-dom';
import { selectFeaturedById } from '../utils/selectFeaturedById';
import FeaturedDetail from '../components/FeaturedDetail';

const FeaturedDetailPage = () => {
 const { paramId } = useParams();
 const featured = selectFeaturedById(paramId);

 return (
  <FeaturedDetail featured={featured} />
 );
};

export default FeaturedDetailPage;

