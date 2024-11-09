import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

import projectOneImage from '../assets/babyecom.jpg';
import projectTwoImage from '../assets/bill.jpg';
import projectThreeImage from '../assets/taskmanagement.avif'
import ProjectFourImage from '../assets/numberguess.png'

const projects = [
  {
    id: 1,
    title: "Baby Ecommerce",
    description: "An advanced e-commerce platform for baby products using React and Node.js.",
    techStack: "React, Node.js, Express, MongoDB, GCP, CI/CD, Docker ",
    image: projectOneImage,
    link: "https://kidtryz.com/",
  },
  {
    id: 2,
    title: "Invoice Management",
    description: "Built a serverless backend for efficient, scalable invoice management using AWS, enabling secure, on-demand generation and storage.",
    techStack: "Node.js, AWS, Docker, DynamoDB, Swagger ",
    image: projectTwoImage,
    link: "https://github.com/chinmayabeheragit/StoreWise",
  },
  {
    id: 3,
    title: "Task Management",
    description: "A web-based task management system that enables users to create, view, update, and delete tasks. Users can organize tasks by status (To-Do, In Progress, Completed), set priorities, and assign due dates. The system will feature user authentication and cloud deployment for scalability and accessibility.",
    techStack: "Django, PostgreSQl, React, JWT, AWS, Docker, CI/CD, NGinx",
    image: projectThreeImage,
    link: "https://github.com/chinmayabeheragit/task-management-system-py/tree/main/task_management",
  },
  {
    id: 4,
    title: "Number Guess Game",
    description: "This ia Java Script Based Number Guess Game",
    techStack: "HTML, CSS, JavaScript",
    image: ProjectFourImage,
    link: "https://guessmynumber-game00.netlify.app/",
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section className="project-section">
      <h2 className="project-title">PROJECTS</h2>
      <div className="carousel-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-subtitle">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Visit Project <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;