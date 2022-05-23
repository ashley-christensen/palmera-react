import React, { Component } from 'react';
import RoomDetails from './RoomDetails';
import Billing from './Billing';
import DateSelector from './DateSelector';

const _MS_PER_DAY = 24 * 60 * 60 * 1000;
const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

class Booking extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const checkout = new Date();
    checkout.setDate(today.getDate() + 1); //minimum nights is 1
    this.state = {
      checkinDate: today,
      checkoutDate: checkout,
      occupants: 1, //initial occupants is 1
      roomType: 'Standard'
    };
  }

  static getDerivedStateFromProps(props, state) {
    const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
    const invalidRange = totalDays <= 0 || totalDays >= 20;
    return {
      totalDays, invalidRange,
    };
  }

  //checkIn
  onCheckInChange = (checkinDate) => {
    this.setState({
      checkinDate
    });
  };

  //checkOut
  onCheckOutChange = (checkoutDate) => {
    this.setState({
      checkoutDate
    });
  };

  //occupants
  onOccupantsChange = (occupants) => {
    this.setState({
      occupants
    });
  };

  //roomtype
  onRoomTypeChange = (roomType) => {
    this.setState({
      roomType
    });
  };


  render() {
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
                      Please note that special accommodations apply to Luxury Spa Week and Romantic Getaway. Discount applies for stays of five or more nights, or by request for entire resort rental. Please call us or fill out our reservation inquiries form for further assistance.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-md-pull-7">
                  <div className="booking-form">
                    <form>
                      <DateSelector
                        checkinDate={this.state.checkinDate}
                        checkoutDate={this.state.checkoutDate}
                        totalDays={this.state.totalDays}
                        inValidRange={this.state.invalidRange}
                        onCheckInChange={this.onCheckInChange}
                        onCheckOutChange={this.onCheckOutChange}
                      />
                      <RoomDetails
                        occupants={this.state.occupants}
                        roomType={this.state.roomType}
                        onOccupantsChange={this.onOccupantsChange}
                        onRoomTypeChange={this.onRoomTypeChange}

                      />
                      <div className="form-btn mt-4">
                        <button type="button" className="submit-btn bg-success" data-toggle="modal" data-target="#reserveModal">Reserve</button>
                        <button className="submit-btn ml-2" data-toggle="modal" data-target="#billModal">View Bill</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Billing
          roomType={this.state.roomType}
          totalDays={this.state.totalDays}
          occupants={this.state.occupants}
        />
        <div id='reserveModal' className='modal fade' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title'>Reservation Sent!</h3>
                <button
                  type='button'
                  className='close modal-close'
                  data-dismiss='modal'
                >
                  &times;
                </button>
              </div>
              <div className='modal-body'>
                <div className='container-fluid'>
                  <p>A member of our team will contact you soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Booking;


