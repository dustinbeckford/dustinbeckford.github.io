/** @format */

import React from "react";
import "../../assets/CSS/About.css";
import mehah from "../../assets/images/me.jpeg";

const AboutMe = () => {
	const handleResumeDownload = () => {
		// Download the resume file
		const resumeUrl = '/Dustin_Beckford_Resume.docx';
		const link = document.createElement('a');
		link.href = resumeUrl;
		link.download = 'Dustin_Beckford_Resume.docx';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleScrollToProjects = () => {
		const projectsSection = document.querySelector('.projects-container');
		if (projectsSection) {
			projectsSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

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
				
				{/* Enhanced Resume Section */}
				<div className='resume-section fade-in-stagger'>
					<div className='resume-card'>
						<div className='resume-header'>
							<div className='resume-icon'>
								<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14,2 14,8 20,8"></polyline>
									<line x1="16" y1="13" x2="8" y2="13"></line>
									<line x1="16" y1="17" x2="8" y2="17"></line>
									<polyline points="10,9 9,9 8,9"></polyline>
								</svg>
							</div>
							<div className='resume-title'>
								<h3>Dustin J Beckford</h3>
								<p>Full Stack Developer</p>
								<div className='contact-info'>
									<span>(470) 430-1200</span>
									<span>dustin.beckford@gmail.com</span>
									<span>Atlanta, GA</span>
								</div>
							</div>
						</div>
						
						<div className='resume-content'>
							<div className='resume-section-item'>
								<h4>Technical Skills</h4>
								<div className='skills-grid'>
									<div className='skill-category'>
										<strong>Frontend:</strong> React, JavaScript, TypeScript, HTML, CSS, Tailwind, Bootstrap
									</div>
									<div className='skill-category'>
										<strong>Backend:</strong> Python, Express, Node, PostgreSQL, SQL, Supabase
									</div>
									<div className='skill-category'>
										<strong>Tools:</strong> VS Code, Git, GitHub, Postman, AI Development
									</div>
								</div>
							</div>
							
							<div className='resume-section-item'>
								<h4>Experience</h4>
								<div className='experience-item'>
									<div className='experience-header'>
										<h5>Software Developer</h5>
										<span className='company'>Digital Crafts</span>
										<span className='duration'>April 2023 - August 2023</span>
									</div>
									<p>Intensive 3-month software development program with 70 hours weekly commitment. Developed full-stack applications using modern technologies.</p>
								</div>
							</div>
							
							<div className='resume-section-item'>
								<h4>Featured Projects</h4>
								<div className='projects-cta'>
									<p>Explore my portfolio of full-stack applications, from frontend API integrations to complete gaming platforms.</p>
									<button className='scroll-to-projects-btn' onClick={handleScrollToProjects}>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M12 5v14"></path>
											<path d="m19 12-7 7-7-7"></path>
										</svg>
										Scroll to Projects
									</button>
								</div>
							</div>
						</div>
						
						<div className='resume-actions'>
							<button className='resume-download-btn' onClick={handleResumeDownload}>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
									<polyline points="7,10 12,15 17,10"></polyline>
									<line x1="12" y1="15" x2="12" y2="3"></line>
								</svg>
								Download Resume
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
