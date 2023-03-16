// components/Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projectManag from "../assets/images/projectmanager.png";
import characterImg from "../assets/images/D&D.png";
import jateImg from "../assets/images/jate.png";
import notetakerIMG from "../assets/images/notetaker.png"
import workdayplannerIMG from "../assets/images/workdayplanner.png"
import comingSoonIMG from "../assets/images/comingsoon.png";
import './css/Projects.css';

const projectList = [
  {
    title: 'D&D Character Generator',
    description: 'Character Generator',
    image: characterImg,
    link: 'https://dndcharactergenerator.herokuapp.com/',
  },
  {
    title: 'Project Manager',
    description: 'Project Manager',
    image: projectManag,
    link: 'https://project3-projectmanagement.herokuapp.com/',
  },
  {
    title: 'J.A.T.E (Just Another Text Editor)',
    description: 'Design & Development (PWA)',
    image: jateImg,
    link: 'https://the-jate-anator.herokuapp.com/',
  },
  {
    title: 'Work Day Planner',
    description: 'Work Day Planner',
    image: workdayplannerIMG,
    link: 'https://azrael-savage.github.io/Week-5-Planner/',
  },
  {
    title: 'Note Taker',
    description: 'Note Taker',
    image: notetakerIMG,
    link: 'https://c11note-taker.herokuapp.com/',
  },
  {
    title: 'Coming Soon',
    image: comingSoonIMG,
    link: '',
  },
];

export const Projects = () => {
  return (
    <Container id="projects" className="projects-container py-5">
      <h3 className="text-center mb-4">Projects</h3>
      <Row>
        {projectList.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="project-card animate__animated animate__fadeIn">
              <img src={project.image} alt={project.title} className="img-fluid" />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              ) : (
                <p>Coming Soon</p>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
