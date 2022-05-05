import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-info'>
        <div className='container'>
          <a href='/index.html' className='navbar-brand'>
            Palmera Resort and Spa
          </a>
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a href='#' className='nav-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='/about.html' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='/featured.html' className='nav-link'>
                  Featured
                </a>
              </li>
              <li className='nav-item'>
                <a href='/reservations.html' className='nav-link'>
                  Reservations
                </a>
              </li>
              <li className='nav-item'>
                <i className='fas icon-nav fa-duotone fa-umbrella-beach fa-2x'></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
