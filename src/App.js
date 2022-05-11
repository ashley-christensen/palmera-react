import React from 'react';
import './styles.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/pages/Home';
import About from './components/pages/About';
import FeaturedList from './components/pages/FeaturedList';
import Reservations from './components/pages/Reservations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Featured' element={<FeaturedList />} />
          <Route path='Reservations' element={<Reservations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
