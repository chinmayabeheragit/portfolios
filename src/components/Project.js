// Project.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';


import projectOneImage from "../assets/babyecom.jpg";
import projectTwoImage from "../assets/bill.jpg";
import projectThreeImage from "../assets/taskmanagement.avif";
import projectFourImage from "../assets/numberguess.png";
import projectFiveImage from "../assets/blog.jpg";
import projectSixImage from "../assets/view-3d-school-classroom.jpg";
import projectSevenImage from "../assets/3d-representation-reselling-market.jpg";
import projectEightImage from "../assets/3d-rendering-cartoon-house.jpg";
import projectNineImage from "../assets/3246621.jpg";

const projects = [
  {
    id: 1,
    title: "Baby Ecommerce",
    image: projectOneImage,
    link: "https://kidtryz.com/",
  },
  {
    id: 2,
    title: "Invoice Management",
    image: projectTwoImage,
    link: "https://github.com/chinmayabeheragit/StoreWise",
  },
  {
    id: 3,
    title: "Task Management",
    image: projectThreeImage,
    link: "https://github.com/chinmayabeheragit/task-management-system-py/tree/main/task_management",
  },
  {
    id: 4,
    title: "Number Guess Game",
    image: projectFourImage,
    link: "https://guessmynumber-game00.netlify.app/",
  },
  {
    id: 5,
    title: "AI Blog Generator",
    image: projectFiveImage,
    link: "https://github.com/chinmayabeheragit/AI-Blog-Generator/",
  },
  {
    id: 6,
    title: "Public School",
    image: projectSixImage,
    link: "https://kalyanpublicschool.org/",
  },
  {
    id: 7,
    title: "Ceya Export",
    image: projectSevenImage,
    link: "https://ceyaexport.com/",
  },
  {
    id: 8,
    title: "Utkal Property",
    image: projectEightImage,
    link: "https://utkalproperty.com/page/4/",
  },
  {
    id: 9,
    title: "AI Podcast Generator",
    image: projectNineImage,
    link: "https://github.com/chinmayabeheragit/ai_podcaster",
  },
];


const Project = () => {
  return (
    <section className="project-section">
      <h2 className="project-title">PROJECTS</h2>
      <div className="carousel-container">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-overlay">
                  <span className="project-name">{project.title}</span>
                </div>
                <div className="project-info">
                  <h3 className="project-subtitle">{project.title}</h3>
                  {/* <p className="project-tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p> */}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;