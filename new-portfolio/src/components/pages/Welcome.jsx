/** @format */
import React from "react";
import "../../assets/CSS/Welcome.css";
import Linkedin from "../../assets/logo/linkedin.png";
import github from "../../assets/logo/github.png";

const Welcome = () => {
	return (
		<section>
			<div className='Welcome-bigbox'>
				<div className='Welcome-content'>
					<span>
						<div className="Welcome-Logos">
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
					</span>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
