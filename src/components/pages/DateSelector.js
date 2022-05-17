import React from 'react'

const DateSelector = () => {
  return (
    <div>
     <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
              <span className="form-label">Check In</span>
               <input className="form-control" type="date" required/>
            </div>
            </div>
            <div className="col-sm-6">
            <div className="form-group">
              <span className="form-label">Check out</span>
              <input className="form-control" type="date" required/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateSelector