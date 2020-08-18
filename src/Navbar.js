import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar-main'>
			<Link className='navbar-title' to='/'>Workout</Link>
			<h4 className='navbar-author'>Shuva Banik</h4>
		</div>
	)
};

export default Navbar;
