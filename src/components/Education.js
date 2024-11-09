import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const educationData = [
    {
        id: 1,
        degree: "Master's In Computer Application",
        institution: 'Trident Academy of Creative Technology, Bhubaneswar, India',
        duration: 'December 2021 - September 2023',
        description: '8 CGPA',
    },
    {
        id: 2,
        degree: 'BSCITM (Information Technology Management)',
        institution: 'Utkal University',
        duration: 'August 2018 - September 2021',
        description: '6.8 CGPA',
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const underlineVariants = {
    initial: { scaleX: 0 }, // Start with 0 width for left-to-right animation
    animate: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Education = () => {
    return (
        <section className="education-container">
            <motion.div
                className="section-title-container"
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.5 }} // Ensures repeated animation on each view
            >
                <h2 className="section-title">Education</h2>
                <motion.div
                    className="section-underline"
                    variants={underlineVariants}
                    style={{ originX: 0 }} // Anchor from the left
                />
            </motion.div>

            <div className="education-list">
                {educationData.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="education-card"
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }} // Repeated animation on each scroll
                    >
                        <p className="education-duration">{edu.duration}</p>
                        <div className="education-details">
                            <h3 className="degree">{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="description">{edu.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
