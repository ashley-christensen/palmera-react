import React, { useEffect, useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
	Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});
	}, []);

	return (
		<>
			<Navbar dark color='info' sticky='top' expand='lg'>
				<NavbarBrand href='/' className='text-white pl-9' >
					Palmera Resort and Spa
					<i className='fas icon-nav fa-duotone fa-umbrella-beach ml-3'></i>
				</NavbarBrand>
				<NavbarToggler className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}/>
				<Collapse isOpen={menuOpen} className="navbar-collapse">
					<Nav className='ms-auto' navbar>
						<NavItem>
							<NavLink to='/' className='nav-link '>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Featured' className='nav-link'>
								Featured
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Information' className='nav-link'>
								Information
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Location' className='nav-link'>
								Location
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Booking' className='nav-link'>
								Booking
							</NavLink>
						</NavItem>
						<Button
							role='button'
							data-toggle='modal'
							data-target='#loginModal'
							className='btn-sm btn-info'
						>
							<i className='fa fa-sign-in'></i> Login
						</Button>
					</Nav>
				</Collapse>
			</Navbar>

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

export default Header;
