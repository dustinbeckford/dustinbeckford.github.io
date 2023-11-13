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
				<h1 className='Its-Me'> Hey, I'm Dustin!</h1>
				<p className='About-Paragraph'>
					I specialize in Full-Stack Development, excelling in both Back-End and
					Databases. On the Back-End, I leverage technologies such as Node.js,
					SQL, Postgres, Express, Elephant SQL, Beekeeper, Sequelize, Postman,
					MongoDB, and Supabase. My proficiency extends to crafting seamless
					interactions on the Front-End using React, JavaScript ES6, Typescript,
					HTML5, CSS, and various CSS Frameworks. Additionally, I am well-versed
					in Version Control, utilizing Git & Github to ensure efficient
					collaboration and code management.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
