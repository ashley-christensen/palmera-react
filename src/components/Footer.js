import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className='section footer py-5 bg-info text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 text-center'>
              <h6>Information</h6>
              <hr />
              <p className='footer-info'>
                Remote Antiguan Resort nestled in the heart of the tropics. We
                provide the ultimate getaway for romance, luxury, and
                relaxation.
              </p>
            </div>
            <div className='col-md-4 text-center'>
              <h6>Quick Links</h6>
              <hr />
              <div>
                <Link to='/' className='footer-link'>
                  Home
                </Link>
              </div>
              <div>
                <Link to='/About' className='footer-link'>
                  About
                </Link>
              </div>
              <div>
                <Link to='/Featured' className='footer-link'>
                  Featured
                </Link>
              </div>
              <div>
                <Link to='/Information' className='footer-link'>
                  Information
                </Link>
              </div>
              <div>
                <Link to='/Booking' className='footer-link'>
                  Booking
                </Link>
              </div>
              <div>
                <Link to='/Location' className='footer-link'>
                  Location
                </Link>
              </div>
            </div>
            <div className='col-md-4 text-center'>
              <h6>Contact Information</h6>
              <hr />
              <div className='footer-contact'>
                70 Main Street, Bay Island, Antigua
              </div>
              <div className='footer-contact'>+1 268 333 9906</div>
              <div className='footer-contact'>PalmeraResort@info.com</div>
            </div>
          </div>
        </div>
        <div className='copyright text-center mt-2'>
          &copy; Ashley Christensen 2022
        </div>
      </section>
    </>
  );
};

export default Footer;
