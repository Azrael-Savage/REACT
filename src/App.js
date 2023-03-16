// App.js
import React, { useState } from "react";
import { CustomNavbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

const App = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className={`app-container ${theme}`}>
			<CustomNavbar toggleTheme={toggleTheme} theme={theme} />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
