import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../logo.svg";

export const CustomNavbar = ({ toggleTheme, theme }) => {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
			className="animate__animated animate__fadeInDown"
			fixed="top"
		>
			<Container>
				<Navbar.Brand href="#home">
					<img
						src={logo}
						alt="Logo"
						width="200"
						height="200"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<div className="toggle-container">
					<Navbar.Toggle aria-controls="navbar-nav" />
				</div>
				<Navbar.Collapse id="navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav>
					<label className="theme-toggle-switch">
{/*   <input
    type="checkbox"
    checked={theme === "dark"}
    onChange={toggleTheme}
  />
  <span className="theme-toggle-slider"></span> */}
</label>

					<Nav>
						<div className="nav-icons">
							<a
								href="https://www.linkedin.com/in/athena-king-929a291a5"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
									alt="LinkedIn"
									width="24"
									height="24"
									className="mx-2"
								/>
							</a>
							<a
								href="https://github.com/Azrael-Savage"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
									alt="GitHub"
									width="24"
									height="24"
									className="mx-2"
								/>
							</a>
							<a
								href="https://discord.gg/qzSeNvDW"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
									alt="Discord"
									width="24"
									height="24"
									className="mx-2"
								/>
							</a>
						</div>
						<Nav.Link href="#contact" className="connect-link">
							Let's Connect
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
