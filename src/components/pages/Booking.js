import React, { useEffect, Component} from 'react';
import RoomDetails from './RoomDetails';
import Billing from './Billing';
import DateSelector from './DateSelector';
// import $ from 'jquery';

const _MS_PER_DAY = 24 * 60 * 60 * 1000
 const dateDiffInDays = (a, b) => {
   const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
   const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
   return Math.floor((utc2 - utc1)/_MS_PER_DAY)
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
       occupants: 1, //initial occupents is 1
       roomType: "Standard"
     }
   }

    static getDerivedStateFromProps(props, state) {
     const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
     const invalidRange = totalDays <= 0 || totalDays >= 20;
     return {
       totalDays, invalidRange,
     }
   }

   //checkIn
   onCheckInChange = (checkinDate) => {
    this.setState({
      checkinDate
    })
   }

   //checkOut
   onCheckOutChange = (checkoutDate) => {
     this.setState({
       checkoutDate
     })
   }

   //occupants
   onOccupantsChange = (occupants) => {
    this.setState({
      occupants
    })
   }

   //roomtype
   onRoomTypechange = (roomType) => {
    this.setState({
      roomType
    })
   }
   
	// componentDidMount() {
  //    $('[data-toggle="tooltip"]').tooltip();
	// };

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
                    <RoomDetails
                      occupants={this.state.occupants}
                      roomType={this.state.roomType}
                      onRoomTypechange={this.onRoomTypechange}
                      onOccupantsChange={this.onOccupantsChange}
                    />    
                    <DateSelector
                      checkinDate={this.state.checkinDate}
                      checkoutDate={this.state.checkoutDate}
                      totalDays={this.state.totalDays}
                      inValidRange={this.state.invalidRange}
                      onCheckInChange={this.onCheckInChange}
                      onCheckOutChange={this.onCheckOutChange}
                    
                    />
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
    {
      !this.state.invalidRange && (<Billing
      roomType={this.state.roomType}
      totalDays={this.state.totalDays}
      occupants={this.state.occupants}
    />)
    }
    
  </>
  )
  }
  
}

export default Booking