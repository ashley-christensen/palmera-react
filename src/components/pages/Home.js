import React from 'react';
import Slider from '../Slider';
import About from './About';
import Featured from './Featured';
import Reservations from './Reservations';

const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <About />
        <Featured />
        <Reservations />
      </div>
    </>
  );
};

export default Home;
