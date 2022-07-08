import React from 'react';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FeaturedList from './pages/FeaturedList';
import FeaturedDetailPage from './pages/FeaturedDetailPage';
import Information from './pages/Information';
import Booking from './pages/Booking';
import Location from './pages/Location';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Featured' element={<FeaturedList />} />
        <Route path='Featured/:paramId' element={<FeaturedDetailPage />} />
        <Route path='Information' element={<Information />} />
        <Route path='Booking' element={<Booking />} />
        <Route path='Location' element={<Location />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
