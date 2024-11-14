// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiGithub } from 'react-icons/fi';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import resume from '../assets/Chinmaya_Behera_Resume.pdf'; // Import resume PDF
import '../styles/About.css';

function About() {
    const [text] = useTypewriter({
        words: ['Software Development', 'Backend Development', 'Frontend Development', 'DevOps', 'Cloud Computing'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <motion.section
            className="about-section flex flex-col items-center justify-center min-h-screen p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="text-content text-center">
                <motion.h2
                    className="intro"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Hey, I am <span className="name-highlight">Chinmaya</span>
                </motion.h2>

                <motion.h3
                    className="roles flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {text}
                    <Cursor cursorStyle="|" />
                </motion.h3>

                {/* Button Group with Animation */}
                <motion.div
                    className="button-group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <motion.a
                        href={resume} // Link to resume PDF
                        className="rounded-button hire-me"
                        target="_blank" // Opens PDF in a new tab
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        aria-label="Hire Me"
                    >
                        <HiOutlinePaperAirplane className="icon" />
                        Hire Me
                    </motion.a>
                    <motion.a
                        href="https://github.com/chinmayabeheragit" // Your actual GitHub profile link
                        className="rounded-button github"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        aria-label="GitHub"
                    >
                        <FiGithub className="icon" />
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
