import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Skills.css";

export const Skills = () => {
  const skillList = [
    "HTML/CSS/Git",
    "JavaScript",
    "Bootstrap",
    "The DOM",
    "APIs",
    "JQuery",
    "JSON",
    "AJAX",
    "UX/UI",
    "Web Design",
    "Logo,"
    "Team collaboration",
    "Agile development",
    "Project demonstration and storytelling",
    "Node",
    "ES6",
    "Object-oriented programming",
    "Express",
    "MySQL",
    "MVC paradigm",
    "Sequelize",
    "Testing",
    "Progressive Web Apps",
    "React",
    "NoSQL",
    "MERN Stack",
    "Computer science",
  ];

  return (
    <Container id="skills" className="skills-container py-5">
      <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
        Skills
      </h2>
      <p className="text-center animate__animated animate__fadeInUp">
        In addition to my professional skills, I am a family-oriented
        individual who values my role as a parent and partner. As a lover of
        the beach, meditation, and staying active, I understand the importance
        of balance and self-care in achieving success. By taking care of myself
        and staying committed to my personal and professional goals, I am
        confident that I can bring my best to every project and create
        innovative solutions that make a difference.
      </p>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="floating-skills">
            <ul className="skills-list">
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className={`animate__animated animate__fadeInUp animate__delay-${
                    (index % 5) * 100
                  }ms`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
