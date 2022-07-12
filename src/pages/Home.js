import React from 'react';
import Slider from '../components/Slider';
import About from './About';
// import FeaturedList from './FeaturedList';
import Information from './Information';
import ImageGallery from '../components/ImageGallery';


const Home = () => {
	return (
		<>
			<div>
				<Slider />
				<About />
				<ImageGallery />
				<Information />

			</div>
		</>
	);
};

export default Home;
