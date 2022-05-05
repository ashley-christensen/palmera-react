import React from 'react';

const Slider = () => {
  return (
    <>
      <section id='main'>
        <div id='Carousel' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li
              data-target='#Carousel'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#Carousel' data-slide-to='1'></li>
            <li data-target='#Carousel' data-slide-to='2'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item carousel-image-1 active'>
              <div className='container'>
                <div className='carousel-caption d-none d-md-block text-right mb-5'>
                  <h1 className='display-3 title-color'>Private Beach Stay</h1>
                  <p className='lead'>
                    Find your bliss on a private beach front with cabanas
                  </p>
                  <a
                    href='/reservations.html'
                    className='btn btn-color slide-btn btn-lg'
                  >
                    Reserve Your Stay
                  </a>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel-image-2'>
              <div className='container'>
                <div className='carousel-caption d-none d-sm-block mb-5'>
                  <h1 className='display-3 title-color'>Luxury Spa Week</h1>
                  <p className='lead'>
                    Delight yourself in luxury suite and spa
                  </p>
                  <a
                    href='/reservations.html'
                    className='btn btn-color slide-btn btn-lg'
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel-image-3'>
              <div className='container'>
                <div className='carousel-caption d-none d-sm-block mb-5'>
                  <h1 className='display-3 title-color'>Romantic Getaway</h1>
                  <p className='lead'>
                    Enjoy the romantic weekend getaway provided for honeymoons
                    and more
                  </p>
                  <a
                    href='/reservations.html'
                    className='btn btn-color slide-btn btn-lg'
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <a
              href='#Carousel'
              data-slide='prev'
              className='carousel-control-prev'
            >
              <span className='carousel-control-prev-icon'></span>
            </a>
            <a
              href='#Carousel'
              data-slide='next'
              className='carousel-control-next'
            >
              <span className='carousel-control-next-icon'></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
