// import React from 'react';
// import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";


// const DateSelector = (props) => {

//     const {
//     checkinDate, 
//     checkoutDate,
//     totalDays,
//     invalidRange, 
//     onCheckInChange,
//     onCheckOutChange,
//     } = props;

// return (
//     <>
//      <div className="row">
//         <div className="col-sm-6">
//           <div className="form-group">
//               <span className="form-label">Check In</span>
//               <DatePicker
//                className="form-control"
//                selected={checkinDate}
//                onChange={onCheckInChange}
//                showYearDropdown
//                dateFormatCalendar="MMMM"
//                yearDropdownItemNumber={15}
//                scrollableYearDropdown
//                  />
//             </div>
//             </div>
//             <div className="col-sm-6">
//             <div className="form-group">
//               <span className="form-label">Check out</span>
//               <DatePicker
//               className="form-control"
//               selected={checkoutDate}
//               onChange={onCheckOutChange}
//               showYearDropdown
//               dateFormatCalendar="MMMM"
//               yearDropdownItemNumber={15}
//               scrollableYearDropdown
//               />
//           </div>
//         </div>
//       </div> 
//     </>
//   )
//     }
    


// export default DateSelector

import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

const DateSelector = (props) => {

    let {
    checkinDate, 
    checkoutDate,
    totalDays,
    invalidRange, 
    onCheckInChange,
    onCheckOutChange,
    } = props;

  return (
    <>
     <div className="row">
           <div className="col-sm-6">
                 <div className="form-group">
                    <span className="form-label">Check In</span>
                          <input className="input-label" required/>  
                          <DatePicker
                            className="form-control"
                            selected={checkinDate}
                            onChange={onCheckInChange}
                            showYearDropdown
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={5}
                            scrollableYearDropdown
                         /> 
                 </div>
           </div>
           <div className="col-sm-6">
                  <div className="form-group">
                    <span className="form-label">Check out</span>
                        <DatePicker
                            className="form-control"
                            selected={checkoutDate}
                            onChange={onCheckOutChange}
                            showYearDropdown
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={15}
                            scrollableYearDropdown
                        />
                      <span className="form-label">{totalDays} Nights</span>  
                      {invalidRange && <p>Invalid range</p>}
                  </div>               
            </div>
     </div>
    </>
    
  )
};

    DateSelector.propTypes={
     checkinDate : PropTypes.instanceOf(Date).isRequired,
     checkoutDate : PropTypes.instanceOf(Date).isRequired,
     onCheckInChange : PropTypes.func.isRequired,
     onCheckOutChange : PropTypes.func.isRequired,
     totalDays : PropTypes.number.isRequired

 }

export default DateSelector 