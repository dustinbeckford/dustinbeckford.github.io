/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Navlogo from "../assets/logo/8c3486cee545bfba69d20c3459509c51.jpg";
import "../assets/CSS/Navbar.css";

export const NavBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<section>
			<div className='Navbar-bigbox'>
				<nav className='navbar'>
					<Link to='/' onClick={closeMobileMenu}>
						<img className='navlogo' src={Navlogo} alt='Logo' />
					</Link>

					<div 
						className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
						onClick={toggleMobileMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
						<li>
							<ScrollLink to='Welcome' smooth={true} duration={500} onClick={closeMobileMenu}>
								Welcome
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='About' smooth={true} duration={500} onClick={closeMobileMenu}>
								About
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='Projects' smooth={true} duration={500} onClick={closeMobileMenu}>
								Projects
							</ScrollLink>
						</li>
						<li>
							<ScrollLink to='Contact' smooth={true} duration={500} onClick={closeMobileMenu}>
								Contact
							</ScrollLink>
						</li>
					</ul>
				</nav>
			</div>
		</section>
	);
};
