import React from 'react';
import cabo from '../images/cabo.jpg';
import palms from '../images/palms.jpg';
import cocktail from '../images/cocktail.jpg';
import float from '../images/float.jpg';
import view from '../images/view.jpg';
import reflection from '../images/reflection.jpg';

const Featured = () => {
  return (
    <>
      <section class='section-cards bg-c-light border-bottom py-5'>
        <div class='container items-grid-container'>
          <h3 class='font-weight-bold display-6 text-center'>
            Featured Experiences
          </h3>

          <div class='row'>
            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container'>
                  <img src={cabo} class='card-img-top embed-responsive-item' />
                </div>
                <div class='card-body'>
                  <div class='card-text'>
                    <h5>Sunset Viewing</h5>
                    <span>
                      <i class='fa-dollar-sign'>150 per person</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container card-img-wrap'>
                  <img src={palms} class='card-img-top' />
                </div>
                <div class='card-body'>
                  <div class='card-text justify-content-between'>
                    <h5>Private Pool</h5>
                    <span>
                      <i class='fa-dollar-sign'>225 per afternoon</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container'>
                  <img src={cocktail} class='card-img-top' />
                </div>
                <div class='card-body'>
                  <div class='card-text justify-content-between'>
                    <h5>Cocktail Hour</h5>
                    <span>
                      <i class='fa-dollar-sign'>75 per person</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>

            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container'>
                  <img src={float} class='card-img-top embed-responsive-item' />
                </div>

                <div class='card-body'>
                  <div class='card-text justify-content-between'>
                    <h5>Sea-Life Float</h5>
                    <span>
                      <i class='fa-dollar-sign'>125 per person</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container'>
                  <img src={view} class='card-img-top embed-responsive-item' />
                </div>

                <div class='card-body'>
                  <div class='card-text justify-content-between'>
                    <h5>Beach reservation</h5>
                    <span>
                      <i class='fa-dollar-sign'>300 per day</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-4'>
              <div class='card shadow stretched-link'>
                <div class='img-container'>
                  <img
                    src={reflection}
                    class='card-img-top embed-responsive-item'
                  />
                </div>

                <div class='card-body'>
                  <div class='card-text'>
                    <h5>Shaded Loungers</h5>
                    <span>
                      <i class='fa-dollar-sign'>775 per week</i>
                    </span>
                  </div>
                  <button class='btn btn-sm btn-color mt-3'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
