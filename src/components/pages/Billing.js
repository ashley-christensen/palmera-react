import React from 'react'

const Billing = () => {
  return (
    <div>
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
						<div className='modal-body'>
							<div className='container-fluid'>
								 <table class="table-bill table-responsive table-striped p-3">
           <tbody>
            <tr>
              <th scope="row">January</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">February</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">March</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">April</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">May</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">June</th>
                 <td>$13,555.00</td>
            </tr> 
            <tr>
              <th scope="row">July</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">August</th>
                 <td>$13,555.00</td>
            </tr>
            <tr>
              <th scope="row">September</th>
                 <td>$13,555.00</td>
            </tr>                         
           </tbody>   
         </table> 
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Modal for Invoice Statement  */}
    </div>
  )
}

export default Billing;
