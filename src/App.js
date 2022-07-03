import React from 'react';
import './styles.css';
import Header from './components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/components/pages/Home';
import FeaturedList from './components/pages/FeaturedList';
import Information from './components/pages/Information';
import Booking from './components/pages/Booking';
import Location from './components/pages/Location';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Featured' element={<FeaturedList />} />
        <Route path='Information' element={<Information />} />
        <Route path='Booking' element={<Booking />} />
        <Route path='Location' element={<Location />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
