import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experienceData = [
    {
        id: 1,
        jobTitle: 'SDE',
        company: 'Hypersage Technology | Bengaluru, Karnataka',
        duration: 'December 2023 - Present',
        description: "At Hypersage i contributed to building and optimizing scalable MERN applications, and Develop Backend Using Javascript and Python Frameworks increasing user engagement by 15%. Enhanced backend efficiency by 20% through optimized APIs. Improved DevOps workflows with Docker and Jenkins, achieving a 25% boost in deployment speed. Collaborated across departments in Agile sprints to enhance end-to-end application performance and deliver user-focused features.",
        skills: ['MERN Stack', 'JavaScript', 'Node.js', 'MongoDB', 'React.js','Python','Django','FastApi','PostgreSQL','Redies','NestJs','Docker','Kubernetes']
    },
    {
        id: 2,
        jobTitle: 'Associate Software Engineer',
        company: 'Technoboot Pvt Ltd',
        duration: 'August 2023 - November 2023',
        description: 'Developed optimized backend APIs in Node.js, enhancing data communication efficiency by 20%. Streamlined state management using Redux, reducing issues by 25% and boosting project efficiency by 20%.',
        skills: ['Backend Development', 'API Integration','Redux']
    },
    {
        id: 4,
        jobTitle: 'Full stack web development Internship',
        company: 'Yhills',
        duration: 'April 2023 - June 2023',
        description: 'Completed a comprehensive internship in full-stack web development, gaining hands-on experience with both frontend and backend technologies. Developed projects using HTML, CSS, JavaScript, and frameworks like React for the frontend, and Node.js with Express for the backend. Acquired skills in building RESTful APIs, managing databases, and implementing responsive designs, enhancing my knowledge of the full development lifecycle.',
        skills: ['HTML','CSS','JavaScript','MERN']
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Experience = () => {
    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const section = document.querySelector('.experience-container');
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="experience-container">
            <h2 className="section-title">Experience</h2>
            
            <div className="experience-list">
                {experienceData.map((exp) => (
                    <motion.div
                        key={exp.id}
                        className="experience-card"
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                    >
                        <p className="experience-duration">{exp.duration}</p>
                        <div className="experience-details">
                            <h3 className="job-title">{exp.jobTitle}</h3>
                            <p className="company">{exp.company}</p>
                            <p className="description">{exp.description}</p>
                            <div className="skills">
                                {exp.skills.map((skill, index) => (
                                    <span key={index} className="skill">{skill}</span>
                                ))}
                            </div>
                        </div>
                        
                        
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
