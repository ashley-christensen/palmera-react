import React from 'react';
import Slider from '../Slider';
import About from './About';
import FeaturedList from './FeaturedList';
import Information from './Information';


const Home = () => {
	return (
		<>
			<div>
				<Slider />
				<About />
				<FeaturedList />
				<Information />
			</div>
		</>
	);
};

export default Home;
