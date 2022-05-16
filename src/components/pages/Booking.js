import React, {useEffect} from 'react';
import RoomDetails from './RoomDetails';
import Billing from './Billing';
import DateSelector from './DateSelector';
import $ from 'jquery';

const Booking = () => {

 const dataDiffInDays = (a, b) => {
   const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
   const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

   
 };


	useEffect(() => {
    $(function () {
     $('[data-toggle="tooltip"]').tooltip();
    });
	}, []);

  return (
    <>
    <div id="booking" className="section-booking">
    <div className="section-center">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-md-push-5">
                    <div className="booking-cta">
                        <h1>Make your Reservation</h1>
                        <p>
                         Please note that special discounts apply to Luxury Spa Week and Romantic Getaway. Booking rates are applied here. For other inquiries please call us or fill out our reservation inquiries form. 
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-md-pull-7">
                    <div className="booking-form">
                        <form>
                      <RoomDetails/>    
                      <DateSelector/>
                            <div className="row mb-4">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <span className="form-label">Guests</span>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-btn">
                                <button type="button" className="submit-btn">Reserve</button>
                                <button className="submit-btn ml-2"data-toggle="modal" data-target="#billModal">View Bill</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
       </div>
     </div>

    <Billing/>
    </>
  )
}

export default Booking