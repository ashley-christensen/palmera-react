import React from 'react'

const RoomDetails = () => {
  return (
    <div>
      <div className="form-group">
        <span className="form-label">Room Type</span>
         <select className="form-control">
           <option> Select Package</option>
           <option> Romantic or Spa ( $7.895 ) </option>
           <option> Beach ( $8.895 )</option>
         </select>
      </div>
    </div>
  )
}

export default RoomDetails