import data from '../featuredData';

export const selectFeaturedById = (id) => {
  const featured = data.find(
    (featured) => featured.id === parseInt(id));
  console.log(featured);
  return featured;
};