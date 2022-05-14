import React from 'react';
import {Link} from 'react-router-dom';

const Information = () => {
  return (
    <>
      <section className='section-info border-bottom py-5'>
        <div className='container'>
          <h3 className='font-weight-bold display-6 text-center'>
            Send Request for More Info
          </h3>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='mb-1'>Full Name</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Phone Number</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Email Address</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>

                  <div className='form-group'>
                    <label className='mb-1'>Message</label>

                    <textarea
                      rows='3'
                      className='form-control'
                      placeholder='Enter Full Name'
                    ></textarea>
                  </div>

                  <div className='form-group py-3'>
                    <button
                      type='button'
                      className='btn btn-color btn-lg w-100'
                    >
                      Send Inquiry Request
                    </button>
                  </div>
                </div>

                <div className='col-md-6 border-start'>
                  <h5 className='main-heading'>Contact Information</h5>
                  <div className='underline'></div>
                  <p>70 Main Street, Bay Island, Antigua</p>
                  <p>Phone: +1 268 333 9906</p>
                  <p>Email: PalmeraResort@info.com</p>
                   <div>
                  <Link
                      to='/Booking'
                      className='btn btn-success btn-lg'
                    >
                      Book Now!
                    </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
