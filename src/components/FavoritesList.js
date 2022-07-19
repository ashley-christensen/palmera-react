import locations from '../locationData';
import FavoriteItem from './FavoriteItem';



const FavoritesList = ({ favorites, setFavorites }) => {
 console.log(favorites);

 return (
  <>
   {locations.map((location, index) => {
    return (
     < FavoriteItem key={index} item={location} />
    );
   })}
  </>
 );

};

export default FavoritesList;