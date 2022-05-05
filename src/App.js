import React from 'react';
import './index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/pages/Home';
import Featured from './components/pages/Featured';
import Reservations from './components/pages/Reservations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Featured' element={<Featured />} />
          <Route path='Reservations' element={<Reservations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
