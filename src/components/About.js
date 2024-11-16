import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiGithub } from 'react-icons/fi';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import resume from '../assets/Chinmaya_Behera_Resume.pdf';
import backgroundVideo from '../assets/video1.mp4'; // Import your video
import '../styles/About.css';

function About() {
    const [text] = useTypewriter({
        words: ['Software Developer', 'Backend Developer', 'Frontend Developer', 'DevOps Enthusiast', 'Cloud Engineer'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <motion.section
            className="about-section relative flex flex-col items-center justify-center min-h-screen p-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background Video */}
            <video
                className="background-video absolute top-0 left-0 w-full h-full object-cover -z-10"
                src={backgroundVideo}
                autoPlay
                loop
                muted
            />

            <div className="text-content text-center space-y-6 relative z-10">
                <motion.h2
                    className="intro text-4xl font-bold"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Hey, I am <span className="text-indigo-500">Chinmaya</span>
                </motion.h2>

                <motion.h3
                    className="roles text-xl flex items-center justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {text}
                    <Cursor cursorStyle="|" />
                </motion.h3>

                {/* Button Group */}
                <motion.div
                    className="button-group flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <motion.a
                        href={resume}
                        className="rounded-button hire-me px-6 py-3 bg-indigo-600 text-white flex items-center justify-center rounded-lg shadow-lg transform transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hire Me"
                    >
                        <HiOutlinePaperAirplane className="mr-2" />
                        Hire Me
                    </motion.a>
                    <motion.a
                        href="https://github.com/chinmayabeheragit"
                        className="rounded-button github px-6 py-3 bg-gray-700 text-white flex items-center justify-center rounded-lg shadow-lg transform transition-transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub className="mr-2" />
                        GitHub
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;
