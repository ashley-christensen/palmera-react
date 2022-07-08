import ImageGallery from '../components/ImageGallery';

const About = () => {
  return (
    <>
      <div className="section about-section border-bottom text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="icon">
                <i className="icon-main fas fa-spa fa-2x"></i>
              </span>
              <p>
                State of the art spa with world-renowned body treatments,
                exfoliation, facials, skincare, and the latest technology for
                relaxation needs.
              </p>
            </div>
            <div className="col-md-4">
              <span className="icon">
                <i className="icon-main fas fa-shower fa-2x"></i>
              </span>
              <p>
                Our resort preserves water and maintains private and
                ecologically sound options for freshwater. We only use an
                environmentally friendly in-house filtration system.
              </p>
            </div>
            <div className="col-md-4">
              <span className="icon">
                <i className="icon-main fas fa-person-swimming fa-2x"></i>
              </span>
              <p>
                We maintain all natural saltwater swimming pools. We offer
                private pools , as well as full service poolside acommodations
                and staff.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageGallery />
    </>
  );
};

export default About;
