// Project.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

import projectOneImage from '../assets/babyecom.jpg';
import projectTwoImage from '../assets/bill.jpg';
import projectThreeImage from '../assets/taskmanagement.avif';
import ProjectFourImage from '../assets/numberguess.png';
import projectFiveImage from '../assets/blog.jpg';

const projects = [
  {
    id: 1,
    title: "Baby Ecommerce",
    description: "An advanced e-commerce platform for baby products using React and Node.js.",
    techStack: "React, Node.js, Express, MongoDB, GCP, CI/CD, Docker",
    image: projectOneImage,
    link: "https://kidtryz.com/",
  },
  {
    id: 2,
    title: "Invoice Management",
    description: "Built a serverless backend for efficient, scalable invoice management using AWS, enabling secure, on-demand generation and storage.",
    techStack: "Node.js, AWS, Docker, DynamoDB, Swagger",
    image: projectTwoImage,
    link: "https://github.com/chinmayabeheragit/StoreWise",
  },
  {
    id: 3,
    title: "Task Management",
    description: "A web-based task management system that enables users to create, view, update, and delete tasks.",
    techStack: "MERN, JWT, AWS, Docker, CI/CD",
    image: projectThreeImage,
    link: "https://github.com/chinmayabeheragit/task-management-system-py/tree/main/task_management",
  },
  {
    id: 4,
    title: "Number Guess Game",
    description: "This is a JavaScript-based Number Guess Game",
    techStack: "HTML, CSS, JavaScript",
    image: ProjectFourImage,
    link: "https://guessmynumber-game00.netlify.app/",
  },
  {
    id: 5,
    title: "AI Blog Generator",
    description: "This is a Django-based AI Blog Generator application ",
    techStack: "Python, Django, FastAPI, PostgreSQL, AssemblyAI, OpenAI, Docker, Kubernetes",
    image: projectFiveImage,
    link: "https://github.com/chinmayabeheragit/AI-Blog-Generator/",
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
                  <p className="project-tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
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
