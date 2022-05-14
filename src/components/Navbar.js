import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
	useEffect(() => {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});
	}, []);
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-info'>
				<div className='container'>
					<NavLink to='/' className='navbar-brand'>
						Palmera Resort and Spa
					</NavLink>
					<button
						className='navbar-toggler'
						data-toggle='collapse'
						data-target='#navbarCollapse'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarCollapse'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<NavLink activeClassName='active' to='/' className='nav-link'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='active'
									to='/About'
									className='nav-link'
								>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='active'
									to='/Featured'
									className='nav-link'
								>
									Featured
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='active'
									to='/Information'
									className='nav-link'
								>
									Information
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									activeClassName='active'
									to='/Booking'
									className='nav-link'
								>
									Booking
								</NavLink>
							</li>
							<li className='nav-item'>
								<i className='fas icon-nav fa-duotone fa-umbrella-beach fa-2x'></i>
							</li>
						</ul>
						{/* login */}
						<span className='navbar-text ml-auto'>
							<a
								role='button'
								data-toggle='modal'
								data-target='#loginModal'
								className='btn-login'
								>
								<i className='fa fa-sign-in'></i> Login
							</a>
						</span>
						{/* login */}
					</div>
				</div>
			</nav>
			{/* Start Modal for Login  */}
			<div id='loginModal' className='modal fade' role='dialog'>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h3 className='modal-title'>Login</h3>
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
								<form>
									<div className='form-row'>
										<div className='form-group col-12'>
											<label className='sr-only' htmlFor='loginEmail'>
												Email address
											</label>
											<input
												type='email'
												className='form-control form-control-sm'
												id='loginEmail'
												placeholder='Enter email'
											/>
										</div>
										<div className='form-group col-12'>
											<label className='sr-only' htmlFor='loginPassword'>
												Password
											</label>
											<input
												type='password'
												className='form-control form-control-sm'
												id='loginPassword'
												placeholder='Password'
											/>
										</div>
										<div className='col'>
											<div className='form-check'>
												<input className='form-check-input' type='checkbox' />
												<label className='form-check-label'> Remember me</label>
											</div>
										</div>
									</div>
									<div className='form-row'>
										<button
											type='button'
											className='btn btn-secondary btn-sm ml-auto'
											data-dismiss='modal'
										>
											Cancel
										</button>
										<button type='submit' className='btn btn-info btn-sm ml-1'>
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Modal for Login  */}
		</>
	);
};

export default Navbar;
