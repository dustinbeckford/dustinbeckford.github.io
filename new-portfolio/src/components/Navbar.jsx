/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<Link to='/'>Website</Link>
			<ul>
				<li>
					<Link to='/Welcome'>Welcome</Link>
				</li>
				<li>
					<Link to='AboutMe'>About Me</Link>
				</li>
				<li>
					<Link to='Resume/Projects'>Resume/Projects</Link>
				</li>
				<li>
					<Link to='Contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
