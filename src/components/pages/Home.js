import React from 'react';
import Slider from '../Slider';
import Featured from './Featured';
import Reservations from './Reservations';

const Home = () => {
  return (
    <>
      <div>
        <Slider />
        <Featured />
        <Reservations />
      </div>
    </>
  );
};

export default Home;
