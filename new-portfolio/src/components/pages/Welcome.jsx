/** @format */
import React from "react";
import "../../assets/CSS/Welcome.css";
import Linkedin from "../../assets/logo/linkedin.png";
import github from "../../assets/logo/github.png";

const Welcome = () => {
	return (
		<section className='Welcome-Section'>
			<div className='welcome-container'>
				<div className='Welcome-content'>
					<h1> Dustin Beckford</h1>
					<span class='Welcome-content'>
						<h2 className='Description'>Full-Stack Web Developer</h2>
					</span>
					<div className='Welcome-Logos'>
						<a
							href='https://github.com/dustinbeckford'
							target='_blank'
							rel='noopener noreferrer'>
							<img className='social-logos' src={github} alt='GitHub' />
						</a>
						<a
							href='https://www.linkedin.com/in/dustin-beckford-67021213a/'
							target='_blank'
							rel='noopener noreferrer'>
							<img className='social-logos' src={Linkedin} alt='LinkedIn' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
