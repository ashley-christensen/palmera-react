import React from 'react';
import Slider from '../Slider';
import About from './About';
import FeaturedList from './FeaturedList';
import Reservations from './Reservations';

const Home = () => {
	return (
		<>
			<div>
				<Slider />
				<About />
				<FeaturedList />
				<Reservations />
			</div>
		</>
	);
};

export default Home;
