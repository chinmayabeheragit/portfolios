import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiGithub } from 'react-icons/fi';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import resume from '../assets/Chinmaya Behera Software Developer.pdf';
import '../styles/About.css';

function About() {
    const [text] = useTypewriter({
        words: ['Software Developer', 'Backend Developer', 'Frontend Developer', 'DevOps Enthusiast', 'Cloud Engineer'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <motion.section
            className="about-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="text-content">
                <motion.h2
                    className="intro"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Hey, I am <span className="text-indigo-500">Chinmaya</span>
                </motion.h2>

                <motion.h3
                    className="roles"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {text}
                    <Cursor cursorStyle="|" />
                </motion.h3>

                {/* Button Group */}
                <motion.div
                    className="button-group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <motion.a
                        href={resume}
                        className="rounded-button hire-me"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hire Me"
                    >
                        <HiOutlinePaperAirplane className="icon" />
                        Hire Me
                    </motion.a>
                    <motion.a
                        href="https://github.com/chinmayabeheragit"
                        className="rounded-button github"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub className="icon" />
                        GitHub
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
