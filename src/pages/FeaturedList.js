import React from 'react';
import FeaturedItem from '../components/FeaturedItem';
import items from '../data';

const FeaturedList = () => {
	return (
		<div className='featured-list'>
			<h2 className='header-sections text-center display-6 mb-4'>
				Featured Experiences
			</h2>
			<section className='section-cards-featured pb-5'>
				{items.map((item) => {
					return <FeaturedItem key={item.id} {...item} />;
				})}
			</section>
		</div>
	);
};

export default FeaturedList;
