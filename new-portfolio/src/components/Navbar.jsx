/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
export const NavBar = () => {
	return (
		<nav className='navbar'>
			<Link to='/' className='logo'>
				Website
			</Link>
			<ul className='nav-links'>
				<li>
					<Link to='/Welcome'>Welcome</Link>
				</li>
				<li>
					<Link to='/About'>About</Link>
				</li>
				<li>
					<Link to='/Projects'>Projects</Link>
				</li>
				<li>
					<Link to='/Contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};
