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
	const [isPopupOpen, setIsPopupOpen] = useState(false);

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
		// Reset form after submission
		setFormData({ name: "", email: "", message: "" });
		setIsPopupOpen(false);
	};

	const togglePopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<>
			{/* Floating Contact Button */}
			<div className='floating-contact-button' onClick={togglePopup}>
				<div className='contact-icon'>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
						<path d="M7 9H17V11H7V9ZM7 12H15V14H7V12Z" fill="currentColor"/>
					</svg>
				</div>
				<span className='contact-text'>Let's Chat</span>
			</div>

			{/* Contact Popup Modal */}
			{isPopupOpen && (
				<div className='contact-popup-overlay' onClick={togglePopup}>
					<div className='contact-popup' onClick={(e) => e.stopPropagation()}>
						<div className='popup-header'>
							<h3>Let's Connect</h3>
							<button className='close-button' onClick={togglePopup}>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
								</svg>
							</button>
						</div>
						
						<form onSubmit={handleSubmit} className='popup-form'>
							<div className='form-group'>
								<label htmlFor='popup-name'>Name</label>
								<input
									type='text'
									id='popup-name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									placeholder='Your name'
									required
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='popup-email'>Email</label>
								<input
									type='email'
									id='popup-email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									placeholder='your.email@example.com'
									required
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='popup-message'>Message</label>
								<textarea
									id='popup-message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									placeholder='Tell me about your project...'
									rows="4"
									required
								></textarea>
							</div>

							<button type='submit' className='submit-button'>
								Send Message
							</button>
						</form>

						<div className='social-links-popup'>
							<p>Or reach out directly:</p>
							<div className='social-buttons'>
								<a href='https://github.com/dustinbeckford' target='_blank' rel='noopener noreferrer' className='social-button'>
									<img src={github} alt='GitHub' />
									<span>GitHub</span>
								</a>
								<a href='https://www.linkedin.com/in/dustin-beckford-67021213a/' target='_blank' rel='noopener noreferrer' className='social-button'>
									<img src={Linkedin} alt='LinkedIn' />
									<span>LinkedIn</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
