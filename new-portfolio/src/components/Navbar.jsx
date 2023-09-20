/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Navbar.css";
import Navlogo from "../assets/logo/8c3486cee545bfba69d20c3459509c51.jpg";
export const NavBar = () => {
	return (
		<section>
			<div className='Navbar-bigbox'>
				<nav className='navbar'>
					<Link to='/'>
						<img className='navlogo' src={Navlogo} />
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
			</div>
		</section>
	);
};
