/** @format */

import "../../assets/CSS/Skills.css";
import React from "react";
import Javascript from "../../assets/logo/Javascript.png";
import react from "../../assets/logo/react.png";
import css from "../../assets/logo/css3.png";
import html from "../../assets/logo/html.png";
import git from "../../assets/logo/git.png";
import github from "../../assets/logo/github2.png";
import npm from "../../assets/logo/npm.png";
import bootstrap from "../../assets/logo/bootstrap.png";
import supabase from "../../assets/logo/supabase.png";
import tailwind from "../../assets/logo/tailwind-css.png";
import sql from "../../assets/logo/sql.png";
import firebase from "../../assets/logo/firebase.png";
import postman from "../../assets/logo/postman.png";
import postgres from "../../assets/logo/postgres.png";
function Skills() {
	return (
		<div>
			<span className='skills'>Skills</span>
			<div className='skills-container'>
				<div className='logo-container'>
					<img src={react} alt='React Logo' className='logo-image' />
					<h4>React</h4>
				</div>
				<div className='logo-container'>
					<img src={Javascript} alt='JavaScript Logo' className='logo-image' />
					<h4>Java Script</h4>
				</div>
				<div className='logo-container'>
					<img src={css} alt='CSS Logo' className='logo-image' />
					<h4>CSS</h4>
				</div>
				<div className='logo-container'>
					<img src={html} alt='html Logo' className='logo-image' />
					<h4>HTML</h4>
				</div>
				<div className='logo-container'>
					<img src={git} alt='git Logo' className='logo-image' />
					<h4>GIT</h4>
				</div>
				<div className='logo-container'>
					<img src={github} alt='github Logo' className='logo-image' />
					<h4>GITHUB</h4>
				</div>
				<div className='logo-container'>
					<img src={npm} alt='npm Logo' className='logo-image' />
					<h4>NPM</h4>
				</div>

				<div className='logo-container'>
					<img src={bootstrap} alt='bootstrap Logo' className='logo-image' />
					<h4>BOOTSTRAP</h4>
				</div>
				<div className='logo-container'>
					<img src={tailwind} alt='tailwind Logo' className='logo-image' />
					<h4>TAILWIND</h4>
				</div>
				<div className='logo-container'>
					<img src={firebase} alt='firebase Logo' className='logo-image' />
					<h4>FIREBASE</h4>
				</div>
				<div className='logo-container'>
					<img src={supabase} alt='supabase Logo' className='logo-image' />
					<h4>SUPABASE</h4>
				</div>
				<div className='logo-container'>
					<img src={sql} alt='sql Logo' className='logo-image' />
					<h4>SQL</h4>
				</div>
				<div className='logo-container'>
					<img src={postman} alt='postman Logo' className='logo-image' />
					<h4>POSTMAN</h4>
				</div>
				<div className='logo-container'>
					<img src={postgres} alt='postgres Logo' className='logo-image' />
					<h4>POSTGRES</h4>
				</div>
			</div>
		</div>
	);
}

export default Skills;
