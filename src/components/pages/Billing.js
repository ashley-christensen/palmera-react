import React, { Component } from 'react';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCharge: 0,
      occupantCharges: 0,
      totalRoomCharges: 0,
      totalOccupantCharges: 0,
      discount: 0,
      grandTotal: 0,
      afterTax: 0,
    };

  }
  static getDerivedStateFromProps(props, state) {
    // properties from Booking component
    const { roomType, totalDays, occupants } = props;
    //calculations needed from static state/props
    const roomCharge = roomType === 'Standard' ? 275 : 395;
    const occupantCharges = occupants === 1 ? 0 : (occupants - 1) * 75;
    const totalRoomCharges = totalDays * roomCharge;
    const totalOccupantCharges = totalDays * occupantCharges;
    const discount = totalDays >= 5 ? 45 : 0;
    const grandTotal = Math.ceil(
      totalRoomCharges - (totalRoomCharges - discount) / 100.0
    );
    const afterTax = Math.ceil((totalOccupantCharges + grandTotal * 1.18));

    return {
      roomCharge,
      occupantCharges,
      totalRoomCharges,
      totalOccupantCharges,
      discount,
      grandTotal,
      afterTax
    };
  }


  render() {
    return (
      <>
        {/* Start Modal for Invoice Statement  */}
        <div id='billModal' className='modal fade' role='dialog'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title'>Invoice Summary</h3>
                <button
                  type='button'
                  className='close modal-close'
                  data-dismiss='modal'
                >
                  &times;
                </button>
              </div>
              <div className='modal-body billing-modal'>
                <div className='container'>
                  <table class="table-responsive table-striped">
                    <tbody className="table">
                      <tr>
                        <td>Room Charges</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.roomCharge}</i></td>
                      </tr>
                      <tr>
                        <td>Nights</td>
                        <td><i className='fa-solid cost'>{this.props.totalDays}</i></td>
                      </tr>
                      <tr>
                        <td>Total Room Charges</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.totalRoomCharges}</i></td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.discount}</i></td>
                      </tr>
                      <tr>
                        <td>Occupants</td>
                        <td><i className='fa-solid cost'>{this.props.occupants}</i></td>
                      </tr>
                      <tr>
                        <td>Occupant Charges</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.totalOccupantCharges}</i><span className="per"> per day</span></td>
                      </tr>
                      <tr>
                        <td>Total With Discount</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.grandTotal}</i></td>
                      </tr>
                      <tr>
                        <td>Grand Total After Taxes</td>
                        <td><i className='fa-solid cost fa-dollar-sign'>{this.state.afterTax}</i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal for Invoice Statement  */}
      </>
    );
  }

}

export default Billing;


