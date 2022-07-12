import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../utils/user/UserLoginForm';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);


	return (
		<>
			<Navbar dark color="info" sticky='top' expand='lg'>
				<NavbarBrand href='/' className='text-white pl-9' >
					Palmera Resort and Spa
					<i className='fas icon-nav fa-duotone fa-umbrella-beach ml-3'></i>
				</NavbarBrand>
				<NavbarToggler className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)} />
				<Collapse isOpen={menuOpen} className="navbar-collapse">
					<Nav className='ms-auto' navbar>
						<NavItem>
							<NavLink to='/' className='nav-link '>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Location' className='nav-link'>
								Location
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Featured' className='nav-link'>
								Featured
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Booking' className='nav-link'>
								Booking
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/Blog' className='nav-link'>
								Blog
							</NavLink>
						</NavItem>
					</Nav>
					<UserLoginForm />
				</Collapse>
			</Navbar>

		</>
	);
};

export default Header;
