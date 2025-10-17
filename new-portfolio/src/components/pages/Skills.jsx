/** @format */

import "../../assets/CSS/Skills.css";
import React, { useState } from "react";
import Javascript from "../../assets/logo/javascript.png";
import react from "../../assets/logo/react.png";
import css from "../../assets/logo/css3.png";
import html from "../../assets/logo/html.png";
import git from "../../assets/logo/git.png";
import github from "../../assets/logo/github2.png";
import npm from "../../assets/logo/npm.png";
import bootstrap from "../../assets/logo/bootstrap.png";
import supabase from "../../assets/logo/supabase.png";
import tailwind from "../../assets/logo/tailwind-css.png";
import sql from "../../assets/logo/Sql.png";
import firebase from "../../assets/logo/firebase.png";
import postman from "../../assets/logo/postman.png";
import postgres from "../../assets/logo/postgres.png";
import Redux from "../../assets/logo/redux.png";
import cursor from "../../assets/logo/cursor.svg";

function Skills() {
	const [selectedSkill, setSelectedSkill] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const skillsData = [
		{
			name: "React",
			image: react,
			description:
				"A powerful JavaScript library for building user interfaces with component-based architecture, virtual DOM, and efficient state management.",
			experience: "Advanced",
			projects: "Multiple portfolio projects, dynamic web applications",
		},
		{
			name: "JavaScript",
			image: Javascript,
			description:
				"The core programming language of the web, enabling dynamic and interactive user experiences with ES6+ features and modern syntax.",
			experience: "Expert",
			projects: "Full-stack applications, API integrations, DOM manipulation",
		},
		{
			name: "Redux",
			image: Redux,
			description:
				"Predictable state container for JavaScript apps, providing centralized state management for complex React applications.",
			experience: "Intermediate",
			projects: "State management, data flow optimization",
		},
		{
			name: "CSS",
			image: css,
			description:
				"Styling language for web design, creating responsive layouts, animations, and modern UI components with advanced selectors.",
			experience: "Expert",
			projects: "Responsive designs, custom animations, modern layouts",
		},
		{
			name: "HTML",
			image: html,
			description:
				"The foundation of web development, creating semantic and accessible markup for modern web applications.",
			experience: "Expert",
			projects: "Semantic markup, accessibility compliance, SEO optimization",
		},
		{
			name: "Git",
			image: git,
			description:
				"Distributed version control system for tracking changes, collaborating on code, and managing project history.",
			experience: "Advanced",
			projects:
				"Version control, branching strategies, collaborative development",
		},
		{
			name: "GitHub",
			image: github,
			description:
				"Cloud-based platform for Git repositories, enabling collaboration, code review, and project management.",
			experience: "Advanced",
			projects: "Repository management, CI/CD, open source contributions",
		},
		{
			name: "NPM",
			image: npm,
			description:
				"Package manager for JavaScript, managing dependencies and scripts for Node.js projects and web applications.",
			experience: "Advanced",
			projects: "Dependency management, package publishing, build automation",
		},
		{
			name: "Bootstrap",
			image: bootstrap,
			description:
				"Popular CSS framework providing pre-built components and responsive grid system for rapid development.",
			experience: "Advanced",
			projects: "Rapid prototyping, responsive layouts, component libraries",
		},
		{
			name: "Tailwind CSS",
			image: tailwind,
			description:
				"Utility-first CSS framework for rapid UI development with customizable design systems and responsive utilities.",
			experience: "Intermediate",
			projects: "Modern UI components, design systems, rapid development",
		},
		{
			name: "Firebase",
			image: firebase,
			description:
				"Google's platform for building web and mobile applications with authentication, database, and hosting services.",
			experience: "Intermediate",
			projects: "Real-time databases, user authentication, cloud hosting",
		},
		{
			name: "Supabase",
			image: supabase,
			description:
				"Open source Firebase alternative providing PostgreSQL database, authentication, and real-time subscriptions.",
			experience: "Intermediate",
			projects:
				"Backend-as-a-Service, real-time features, PostgreSQL integration",
		},
		{
			name: "SQL",
			image: sql,
			description:
				"Structured Query Language for managing and manipulating relational databases with complex queries and data analysis.",
			experience: "Advanced",
			projects: "Database design, query optimization, data analysis",
		},
		{
			name: "Postman",
			image: postman,
			description:
				"API development and testing platform for designing, testing, and documenting RESTful APIs and web services.",
			experience: "Advanced",
			projects: "API testing, documentation, automated testing workflows",
		},
		{
			name: "PostgreSQL",
			image: postgres,
			description:
				"Advanced open-source relational database system with ACID compliance, extensibility, and robust data integrity.",
			experience: "Intermediate",
			projects: "Database administration, complex queries, data modeling",
		},
		{
			name: "AI Assistant",
			image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
			description:
				"Collaborative AI development partner for code generation, debugging, architecture planning, and modern development workflows.",
			experience: "Expert",
			projects:
				"Portfolio development, code optimization, technical documentation",
		},
		{
			name: "VS Code",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
			description:
				"Microsoft's powerful code editor with extensive extensions, integrated debugging, Git support, and customizable workspace for modern development.",
			experience: "Expert",
			projects: "Full-stack development, debugging, extension ecosystem",
		},
		{
			name: "Cursor",
			image: cursor,
			description:
				"AI-powered code editor built on VS Code with integrated AI assistance, intelligent code completion, and modern development workflows.",
			experience: "Advanced",
			projects:
				"AI-assisted coding, rapid prototyping, intelligent development",
		},
	];

	const handleSkillClick = (skill) => {
		setSelectedSkill(skill);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setSelectedSkill(null);
	};
	return (
		<div className='fade-in'>
			<span className='skills'>Skills</span>
			<div className='skills-container fade-in-stagger'>
				{skillsData.map((skill, index) => (
					<div
						key={index}
						className='logo-container'
						onClick={() => handleSkillClick(skill)}>
						<img
							src={skill.image}
							alt={`${skill.name} Logo`}
							className='logo-image'
						/>
						<h4>{skill.name}</h4>
					</div>
				))}
			</div>

			{showModal && selectedSkill && (
				<div className='skill-modal-overlay' onClick={closeModal}>
					<div
						className='skill-modal-content'
						onClick={(e) => e.stopPropagation()}>
						<div className='skill-modal-header'>
							<img
								src={selectedSkill.image}
								alt={`${selectedSkill.name} Logo`}
								className='skill-modal-logo'
							/>
							<h3>{selectedSkill.name}</h3>
							<button className='skill-modal-close' onClick={closeModal}>
								×
							</button>
						</div>
						<div className='skill-modal-body'>
							<p className='skill-description'>{selectedSkill.description}</p>
							<div className='skill-details'>
								<div className='skill-detail-item'>
									<span className='skill-detail-label'>Experience Level:</span>
									<span
										className={`skill-experience skill-${selectedSkill.experience.toLowerCase()}`}>
										{selectedSkill.experience}
									</span>
								</div>
								<div className='skill-detail-item'>
									<span className='skill-detail-label'>Projects:</span>
									<span className='skill-projects'>
										{selectedSkill.projects}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Skills;
