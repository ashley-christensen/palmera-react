import React from 'react';
// import DatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker/dist/react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { PropTypes } from 'prop-types';

const DateSelector = (props) => {

  let {
    checkinDate,
    checkoutDate,
    totalDays,
    inValidRange,
    onCheckInChange,
    onCheckOutChange,
  } = props;

  return (
    <>
      <div className="row date-row">
        <div className="col-sm-6">
          <div className="form-group">
            <span className="form-label">Check In</span>
            <input className="input-label" required />
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
            <span className="form-label">{inValidRange ? 'please enter valid range' : `Nights: ${totalDays}`}</span>
          </div>
        </div>
      </div>
    </>

  );
};

DateSelector.propTypes = {
  checkinDate: PropTypes.instanceOf(Date).isRequired,
  checkoutDate: PropTypes.instanceOf(Date).isRequired,
  onCheckInChange: PropTypes.func.isRequired,
  onCheckOutChange: PropTypes.func.isRequired,
  totalDays: PropTypes.number.isRequired

};

export default DateSelector; 