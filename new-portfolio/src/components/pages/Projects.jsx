/** @format */

import React, { useState } from "react";
import "../../assets/CSS/Projects.css";
import CarSearchImage from "../../assets/images/CarSearch.png";
import GamerNetImage from "../../assets/images/GameNet.png";
import CarEventImage from "../../assets/images/CarEvent.png";

const Projects = () => {
	const projectsData = [
		{
			name: "Car Search Index",
			description:
				"This project is a Car Search Engine that uses the 'Cars API by Api Ninjas' to provide users with detailed vehicle specifications. Users can input Make, Model, and Year details to retrieve key information about a specific vehicle. The application dynamically displays these details on the webpage, including Fuel Type, Cylinders, Transmission type, and MPG values for City, Highway, and Combined driving. The color scheme is modern with white and gray shades, and the inclusion of photos enhances the overall user experience. This project aims to assist users in making informed decisions when considering the purchase of a vehicle.",
			link: "https://github.com/dustinbeckford/front-end-project",
			demoLink: "https://youtu.be/4vduEZJy_Sc",
			image: CarSearchImage,
		},
		{
			name: "Event Hosting",
			description:
				"The CarEvent App is an application designed to simplify the process of hosting and managing car events. It provides a user-friendly interface and comprehensive features for event organizers to track participants, their cars, event details, and sponsorships.",
			link: "https://github.com/dustinbeckford/backend-project-2",
			demoLink: "https://youtu.be/il2XWkDi5r4",
			image: CarEventImage,
		},
		{
			name: "E-Sports Website",
			description:
				"For our Capstone final project we chose to create a gaming social application utilizing our full-stack web development skills in an agile fashion in two weeks' time. This application is designed to provide gamers with a platform to connect, communicate, and game together. Whether you're looking for new friends to play with, organizing gaming sessions, or simply chatting about your favorite games, our app has you covered.",
			link: "https://github.com/August-2023-Capstone/Capstone/tree/main",
			demoLink: "https://youtu.be/UPQ1Q1FtLTs",
			image: GamerNetImage,
		},
	];

	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const handleModal = (project) => {
		setSelectedProject(project);
		setShowModal(!showModal);
	};

	return (
		<div className='fade-in'>
			<span className='Projects'>Projects</span>
			<div className='projects-container'>
				<div className='projects-wrapper fade-in-stagger'>
					{projectsData.map((project, index) => (
						<div
							key={index}
							onClick={() => handleModal(project)}
							className='project-card'>
							<div className='project-image'>
								<img src={project.image} alt={project.name} />
							</div>
							<div className='project-name'>{project.name}</div>
						</div>
					))}
				</div>
				{showModal && (
					<div className='modal-container' onClick={() => handleModal(null)}>
						<div className='modal-content' onClick={(e) => e.stopPropagation()}>
							<button className='modal-close' onClick={() => handleModal(null)}>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
							
							<div className='modal-header'>
								<div className='project-image-modal'>
									<img src={selectedProject.image} alt={selectedProject.name} />
								</div>
								<div className='project-info'>
									<h2>{selectedProject.name}</h2>
									<div className='tech-stack'>
										<span className='tech-badge'>React</span>
										<span className='tech-badge'>JavaScript</span>
										<span className='tech-badge'>CSS</span>
										<span className='tech-badge'>API</span>
									</div>
								</div>
							</div>
							
							<div className='modal-body'>
								<p className='project-description'>{selectedProject.description}</p>
							</div>
							
							<div className='modal-actions'>
								<a href={selectedProject.link} className='action-button primary' target="_blank" rel="noopener noreferrer">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
									</svg>
									View Code
								</a>
								<a href={selectedProject.demoLink} className='action-button secondary' target="_blank" rel="noopener noreferrer">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<polygon points="5,3 19,12 5,21"></polygon>
									</svg>
									Live Demo
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
