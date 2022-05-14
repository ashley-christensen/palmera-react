import React from 'react'

const Booking = () => {
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
                            <div className="form-group">
                                <span className="form-label">Room Type</span>
                                        <select className="form-control">
                                            <option> Select Package</option>
                                            <option> Romantic or Spa ( $7.895 ) </option>
                                            <option> Beach ( $8.895 )</option>
                                        </select>
                            </div>
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
                            <div className="row">
                          
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
                                <div className="row">
                                 <div className="col">
                                    <table class="table-bill table-responsive table-striped p-3">
                                       <tbody>
                                           <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                           </tr>
                                            <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>
                                             <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>
                                            <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                           </tr>
                                            <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>
                                             <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>
                                            <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                           </tr>
                                            <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>
                                             <tr>
                                             <th scope="row">January</th>
                                              <td>$13,555.00</td>
                                            </tr>  
                                     </tbody>   
                                  </table> 
                                 </div>
                                </div> 
                            </div>
                            <div className="form-btn">
                                <button className="submit-btn">Check availability</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Booking