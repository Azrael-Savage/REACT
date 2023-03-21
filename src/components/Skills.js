import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Skills.css";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "https://cdn-icons-png.flaticon.com/512/888/888854.png",
      skills: ["HTML/CSS/Git", "JavaScript", "Bootstrap", "React", "Vue.js"],
    },
    {
      title: "Backend",
      icon: "https://cdn-icons-png.flaticon.com/512/1031/1031787.png",
      skills: ["Node.js", "Express", "Python", "Ruby", "PHP"],
    },
    {
      title: "Databases",
      icon: "https://cdn-icons-png.flaticon.com/512/2639/2639762.png",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "NoSQL"],
    },
    {
      title: "Tools & Technologies",
      icon: "https://cdn-icons-png.flaticon.com/512/1087/1087825.png",
      skills: [
        "Git",
        "Webpack",
        "Babel",
        "NPM",
        "Yarn",
        "Docker",
        "CI/CD",
      ],
    },
  ];

  return (
    <Container id="skills" className="skills-container py-5">
      <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
        Skills
      </h2>
      <Row>
        {skillCategories.map((category, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="skill-category-col"
          >
            <div className="skill-category">
              <img
                src={category.icon}
                alt={`${category.title} icon`}
                className="skill-category-icon"
              />
              <h3 className="skill-category-title theme-text">{category.title}</h3>
              <ul className="skill-category-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
