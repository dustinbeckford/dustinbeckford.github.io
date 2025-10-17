/** @format */

import React from "react";
import "../../assets/CSS/About.css";
import mehah from "../../assets/images/me.jpeg";

const AboutMe = () => {
	return (
		<section className='About fade-in'>
			<div className='About-Div'>
				<span className='About-me'>About Me</span>
				<img className='About-Portrait' src={mehah} alt='Portrait' />
				<h1 className='Its-Me'>Hey, I'm Dustin!</h1>
				<p className='About-Paragraph'>
					I'm a passionate Full-Stack Developer who loves creating seamless digital experiences. 
					With expertise in both backend systems and frontend interfaces, I bring ideas to life 
					through clean code and intuitive design.
				</p>
				<div className='About-Highlights fade-in-stagger'>
					<div className='highlight-item'>
						<h3>Backend Expertise</h3>
						<p>Node.js, SQL, PostgreSQL, Express, MongoDB, Supabase</p>
					</div>
					<div className='highlight-item'>
						<h3>Frontend Mastery</h3>
						<p>React, TypeScript, Modern CSS, Responsive Design</p>
					</div>
					<div className='highlight-item'>
						<h3>Development Tools</h3>
						<p>Git, GitHub, VS Code, Cursor, AI-Assisted Development</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
