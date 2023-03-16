// SidebarMenu.js
import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./css/SidebarMenu.css";

const SidebarMenu = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sidebarMenu = document.querySelector(".sidebar-menu");
      if (window.scrollY > 200) {
        sidebarMenu.style.display = "block";
      } else {
        sidebarMenu.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar-menu">
      <Nav className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </div>
  );
};

export default SidebarMenu;
