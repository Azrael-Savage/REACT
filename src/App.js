import React from "react";
import { CustomNavbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
