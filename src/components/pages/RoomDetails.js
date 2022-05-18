import React from 'react'

const RoomDetails = () => {
  return (
    <div>
      <div className="form-group">
        <span className="form-label">Room Type</span>
         <select className="form-control">
           <option value="">Select Resevation Package</option>
           <option> Romantic or Spa ( $7.895 ) </option>
           <option> Beach ( $8.895 )</option>
         </select>
      </div>
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
    </div>
  )
}

export default RoomDetails