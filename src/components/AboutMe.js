import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutMe.css'; // Import the CSS for styling

// Import the image (ensure the path is correct)
import AboutMeImage from '../assets/my pic.jpg'; // Adjust the path to where your image is located

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <motion.div
        className="about-me-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="about-me-title">
          <span className="about">About</span> <span className="me">Me</span>
        </h2>
        <p className="about-me-description">
          Hey, I am <span className="highlight-orange">Chinmaya</span>, a dynamic Software Engineer skilled in MERN stack, DevOps, and cloud technologies, with experience building scalable web applications and optimizing backend performance. Proficient in JavaScript, Python, and TypeScript, with hands-on expertise in AWS, Docker, Kubernetes, and CI/CD for improved deployment and resource utilization. Proven impact in boosting system efficiency by up to 25% and enhancing data retrieval by 40% using Redis and PostgreSQL. Recognized for delivering high-performance, user-focused applications, including e-commerce platforms and AI-powered tools. Certified in Node.js, JavaScript, and Python, with a Master’s in Computer Application and a strong commitment to innovation.
        </p>
      </motion.div>

      <motion.div
        className="about-me-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={AboutMeImage} alt="About Me" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
