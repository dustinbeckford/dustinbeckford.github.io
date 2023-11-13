/** @format */

import React, { useState } from "react";
import "../../assets/CSS/Contact.css";
import Linkedin from "../../assets/logo/linkedin.png";
import github from "../../assets/logo/github.png";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add your logic here to handle the form submission
		console.log("Form submitted:", formData);
	};

	return (
		<div>
			<h2>Contact Me</h2>
			<div className='contact-container'>
				<form onSubmit={handleSubmit} className='contact-form'>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>

					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>

					<label htmlFor='message'>Message:</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						required></textarea>

					<button type='submit'>Submit</button>
				</form>
			</div>
			<div>
				<h2>Or Reach out via</h2>
			</div>
			<div>
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
	);
};
