import React, {Component} from 'react'

class DateSelector extends Component {
render() {
return (
    <>
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
    </>
  )
    }
    
}

export default DateSelector