import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const projectData = [
	{
		title: "D&D Character Generator",
        description: "Character Generator",
		image: "../assets/images/D&D.png",
		link: "https://dndcharactergenerator.herokuapp.com/",
	},
	{
		title: "Project Manager",
        description: "Project Manager",
		image: "../assets/images/projectmanager.png",
		link: "https://project2.example.com",
	},
	{
		title: "J.A.T.E(Just Another Text Editor",
        description: "Design & Development(PWA)",
		image: "../assets/images/jate.png",
		link: "https://the-jate-anator.herokuapp.com/",
	},
    {
		title: "Work Day Planner",
        description: "Work Day Planner",
		image: "../assets/images/workdayplanner.png",
		link: "https://azrael-savage.github.io/Week-5-Planner/",
	},
    {
		title: "Note Taker",
        description: "Note Taker",
		image: "../assets/images/notetaker.png",
		link: "https://project2.example.com",
	},
    {
		title: "Coming Soon",
		image: "../assets/images/comingsoon.png,
		link: "",
	},
];

export const Projects = () => {
	return (
		<Container className="my-5 animate__animated animate__fadeIn">
			<Row>
				{projectData.map((project, index) => (
					<Col key={index} md={4}>
						<Card className="mb-4">
							<Card.Img variant="top" src={project.image} />
							<Card.Body>
								<Card.Title>{project.title}</Card.Title>
								<Card.Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Project
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
