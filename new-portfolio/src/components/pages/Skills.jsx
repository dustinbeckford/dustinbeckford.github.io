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
function Skills() {
	return (
		<div className='skills-container'>
			<h1>Skills</h1>

			<div className='logo-container'>
				<img src={react} alt='React Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={Javascript} alt='JavaScript Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={css} alt='css Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={html} alt='html Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={git} alt='git Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={npm} alt='npm Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={github} alt='github Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={bootstrap} alt='bootstrap Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={tailwind} alt='tailwind Logo' className='logo-image' />
			</div>
			<div className='logo-container'>
				<img src={supabase} alt='supabase Logo' className='logo-image' />
			</div>
		</div>
	);
}

export default Skills;
