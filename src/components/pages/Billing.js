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
    const occupantCharges = occupants === 1 ? 0 : (occupants - 1) * 300;
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
                        <td>{this.state.roomCharge} USD</td>
                      </tr>
                      <tr>
                        <td>Nights</td>
                        <td>{this.props.totalDays}</td>
                      </tr>
                      <tr>
                        <td>Total Room Charges</td>
                        <td>{this.state.totalRoomCharges} USD</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td>{this.state.discount} USD</td>
                      </tr>
                      <tr>
                        <td>Occupants</td>
                        <td>{this.props.occupants}</td>
                      </tr>
                      <tr>
                        <td>Occupant Charges</td>
                        <td>{this.state.occupantCharges} USD per day</td>
                      </tr>
                      <tr>
                        <td>Occupant Charges</td>
                        <td>{this.state.totalOccupantCharges} USD</td>
                      </tr>
                      <tr>
                        <td>Grand Total With Discount</td>
                        <td>{this.state.grandTotal} USD</td>
                      </tr>
                      <tr>
                        <td>After Taxes</td>
                        <td>{this.state.afterTax} USD</td>
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


