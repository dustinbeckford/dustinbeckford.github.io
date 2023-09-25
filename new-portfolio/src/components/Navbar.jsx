/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Navlogo from "../assets/logo/8c3486cee545bfba69d20c3459509c51.jpg";
import "../assets/CSS/Navbar.css";

export const NavBar = () => {
	return (
		<section>
			<div className='Navbar-bigbox'>
				<nav className='navbar'>
					<Link to='/'>
						<img className='navlogo' src={Navlogo} alt='Logo' />
					</Link>

					<ul className='nav-links'>
						<li>
							<ScrollLink to='Welcome' smooth={true} duration={500}>
								Welcome
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='About' smooth={true} duration={500}>
								About
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='Projects' smooth={true} duration={500}>
								Projects
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='Contact' smooth={true} duration={500}>
								Contact
							</ScrollLink>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};
