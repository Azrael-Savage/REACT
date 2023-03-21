// components/Projects.js
import React from "react";
import { Container, Tab, Tabs, Row, Col } from 'react-bootstrap';
import projectManag from "../assets/images/projectmanager.png";
import characterImg from "../assets/images/D&D.png";
import jateImg from "../assets/images/jate.png";
import notetakerIMG from "../assets/images/notetaker.png";
import workdayplannerIMG from "../assets/images/workdayplanner.png";
import comingSoonIMG from "../assets/images/comingsoon.png";
import "./css/Projects.css";

const projectList = [
	{
		title: "Project Manager",
		description: "Project Manager",
		image: projectManag,
		link: "https://project3-projectmanagement.herokuapp.com/",
	},
	{
		title: "J.A.T.E (Just Another Text Editor)",
		description: "Design & Development (PWA)",
		image: jateImg,
		link: "https://the-jate-anator.herokuapp.com/",
	},
	{
		title: "Work Day Planner",
		description: "Work Day Planner",
		image: workdayplannerIMG,
		link: "https://azrael-savage.github.io/Week-5-Planner/",
	},
	{
		title: "Note Taker",
		description: "Note Taker",
		image: notetakerIMG,
		link: "https://c11note-taker.herokuapp.com/",
	},
	{
		title: "Data Visualization",
		image: comingSoonIMG,
		link: "",
	},
  {
		title: "Task Automation",
		image: comingSoonIMG,
		link: "",
	},
  {
		title: "Machine learning",
		image: comingSoonIMG,
		link: "",
	},
  {
		title: "API Integration",
		image: comingSoonIMG,
		link: "",
	},
];

const chunk = (array, size) => {
	const chunkedArray = [];
	for (let i = 0; i < array.length; i += size) {
		chunkedArray.push(array.slice(i, i + size));
	}
	return chunkedArray;
};

const projectsInChunks = chunk(projectList, 3);

export const Projects = () => {
	return (
		<Container id="projects" className="projects-container py-5">
			<h3 className="text-center mb-4">Projects</h3>
			<h4 className="text-center mb-4">
				I continuously add more to my portfolio, so keep an eye out for more of
				my work.
			</h4>

			<Tabs defaultActiveKey="tab-0" id="project-tabs">
				{projectsInChunks.map((projects, tabIndex) => (
					<Tab
						key={`tab-${tabIndex}`}
						eventKey={`tab-${tabIndex}`}
						title={`Tab ${tabIndex + 1}`}
					>
						<Row className="mt-4">
							{projects.map((project, index) => (
								<Col key={index} md={4} className="mb-4">
									<div className="project-card animate__animated animate__fadeIn">
										<img
											src={project.image}
											alt={project.title}
											className="img-fluid"
										/>
										<h4>{project.title}</h4>
										<p>{project.description}</p>
										{project.link ? (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="btn btn-primary"
											>
												View Project
											</a>
										) : (
											<p>Coming Soon</p>
										)}
									</div>
								</Col>
							))}
						</Row>
					</Tab>
				))}
			</Tabs>
		</Container>
	);
};
