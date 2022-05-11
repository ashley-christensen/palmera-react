import React from 'react';
import FeaturedItem from './FeaturedItem';
import items from '../../data';

const FeaturedList = () => {
	return (
		<div className='featured-list'>
			<h3 className='font-weight-bold display-6 text-center pt-5'>
				Featured Experiences
			</h3>
			<section className='section-cards-featured pb-5'>
				{items.map((item) => {
					console.log(item);
					return <FeaturedItem key={item.id} {...item} />;
				})}
			</section>
		</div>
	);
};

export default FeaturedList;
