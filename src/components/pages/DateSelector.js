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
                        <input className="form-control" type="date" required/>
                          {/* <DatePicker
                            className="form-control"
                            type="date"
                            /> */}
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
                   </div>
                                        
      </div>
     </div>
    </>
    
  )
}

export default DateSelector 