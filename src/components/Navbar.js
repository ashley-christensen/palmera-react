import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-sm navbar-dark bg-info'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
						Palmera Resort and Spa
					</Link>
					<button
						className='navbar-toggler'
						data-toggle='collapse'
						data-target='#navbarCollapse'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarCollapse'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item active'>
								<Link to='/' className='nav-link'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/About' className='nav-link'>
									About
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/Featured' className='nav-link'>
									Featured
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/Reservations' className='nav-link'>
									Reservations
								</Link>
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
