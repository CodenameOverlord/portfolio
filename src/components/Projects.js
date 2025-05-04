import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A React-based personal portfolio hosted on GitHub Pages.",
    link: "https://github.com/CodenameOverlord/portfolio",
    image: process.env.PUBLIC_URL + "/images/portfolioProject.png",
  },
  {
    title: "Location Tracker",
    description: "Location tracker using Kafka and Spring Boot.",
    link: "https://github.com/CodenameOverlord/location_saver",
    image: process.env.PUBLIC_URL + "/images/locationTrackingApplication.png",
  },
  {
    title: "Auth Server",
    description: "OAuth2 authentication server using Spring Security.",
    link: "https://github.com/CodenameOverlord/AuthServer-security-final",
    image: process.env.PUBLIC_URL + "/images/authServer.png",
  },
  // Add more projects here
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={`${project.title} logo`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
