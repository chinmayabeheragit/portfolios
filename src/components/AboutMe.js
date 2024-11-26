import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <motion.div
        className="about-me-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="about-me-title">
          About <span className="highlight">Me</span>
        </h2>
        <p className="about-me-description">
          Hello! I'm <span className="highlight">Chinmaya</span>, a passionate Software Engineer with expertise in MERN stack, DevOps, and cloud technologies. I enjoy building robust, user-friendly web applications and optimizing backend performance to deliver seamless user experiences. My skillset includes JavaScript, Python, TypeScript, and modern deployment tools like Docker and AWS.
        </p>
        <p className="about-me-description">
          I thrive on solving complex problems and creating scalable solutions, ensuring innovation in every project I undertake. Let's collaborate and create something remarkable together!
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
