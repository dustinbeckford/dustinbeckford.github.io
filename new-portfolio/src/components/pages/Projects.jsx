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
		<div>
			<span className='Projects'>Projects</span>
			<div className='projects-container'>
				<div className='projects-wrapper'>
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
					<div className='modal-container'>
						<div className='modal-content'>
							<h2>{selectedProject.name}</h2>
							<p>{selectedProject.description}</p>
							<a href={selectedProject.link}>GitHub</a>
							<a href={selectedProject.demoLink}>Demo</a>
							<button onClick={() => handleModal(null)}>Close</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Projects;
