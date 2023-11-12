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
				"This project is a Car Search Engine that provides users with detailed vehicle specifications by allowing them to input specific Make, Model, and Year details. It interacts with the 'Cars API by Api Ninjas,' enabling the retrieval of key-value pairs related to the specified vehicle. By leveraging the Document Object Model (DOM), the project dynamically appends these elements to a designated div, enabling the styling of information for a visually appealing and user-friendly interface. The application offers comprehensive information about the queried vehicle, including Fuel Type, Cylinders, Transmission type (AUTO or MANUAL), and various MPG (Miles Per Gallon) values for City, Highway, and Combined driving. These specifications assist users in making well-informed decisions when considering the purchase of a particular vehicle. The project's color scheme features white and gray shades for a modern and sleek appearance. The integration of photos enhances the visual appeal of the web page, improving the overall user experience. By combining API functionalities with an intuitive user interface, the Car Search Engine project delivers valuable information to users, aiding them in their car purchase decision-making process.",
			link: "https://github.com/dustinbeckford/front-end-project",
			image: CarSearchImage,
		},
		{
			name: "Event Hosting",
			description: "Description of the Event Hosting project.",
			link: "https://github.com/dustinbeckford/backend-project-2",
			image: CarEventImage,
		},
		{
			name: "E-Sports Website",
			description: "Description of the E-Sports Website project.",
			link: "https://github.com/August-2023-Capstone/Capstone/tree/main",
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
		<span className='Fade-in-Projects'>
			Projects
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
		</span>
	);
};

export default Projects;
