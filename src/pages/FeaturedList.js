import React, { useState, useEffect } from 'react';
import FeaturedItem from '../components/FeaturedItem';
import Loading from '../components/Loading';
// import items from '../featuredData';

const FeaturedList = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch('/featuredData2.json');
			const features = await response.json();
			console.log(features);
			setData(features);
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
		<div>
			{loading && <Loading />}
			{!loading && <div className='featured-list'>
				<h2 className='header-sections text-center display-6 mb-4'>
					Featured Experiences
				</h2>
				<section className='section-cards-featured pb-5'>
					{data.items.map((item) => {
						return <FeaturedItem key={item.id} {...item} />;
					})}
				</section>
			</div>
			}
		</div>

	);
};

export default FeaturedList;
