/** @format */

import React from "react";
import "../../assets/CSS/About.css";
import mehah from "../../assets/images/me.jpeg";

const AboutMe = () => {
	return (
		<section className='About'>
			<div className='About-Div'>
				<span className='About-me'>About Me</span>
				<img className='About-Portrait' src={mehah} alt='Portrait' />
				<p className='About-Paragraph'>
					As someone with a background in delivery logistics, I possess
					impressive organizational skills, an unwavering attention to detail,
					and a strong commitment to meeting deadlines. My experience has taught
					me how to excel in fast-paced environments, navigate changing
					circumstances with ease, and efficiently tackle problems as they
					arise. Through my studies at DigitalCrafts, I have gained extensive
					knowledge and hands-on experience in full-stack web development,
					including both front-end and back-end technologies. I am highly
					skilled in utilizing HTML, CSS, JavaScript, and various frameworks to
					craft responsive and user-friendly web applications. With a passion
					for coding and a wealth of practical experience, I am excited to
					contribute to innovative projects and collaborate with like-minded
					professionals.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
