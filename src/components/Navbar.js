import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-sm navbar-dark bg-info'>
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
									to='/Reservations'
									className='nav-link'
								>
									Reservations
								</NavLink>
							</li>
							<li className='nav-item'>
								<i className='fas icon-nav fa-duotone fa-umbrella-beach fa-2x'></i>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
