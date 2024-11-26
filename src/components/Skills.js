import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillsData = [
    { name: 'MongoDB', logo: require('../assets/mongodb.webp') },
    { name: 'Express.js', logo: require('../assets/expressjs.png') },
    { name: 'React.js', logo: require('../assets/icons8-react-80.png') },
    { name: 'Node.js', logo: require('../assets/icons8-node-js-50.png') },
    { name: 'JavaScript', logo: require('../assets/icons8-javascript-50.png') },
    { name: 'Python', logo: require('../assets/icons8-python-100.png') },
    { name: 'TypeScript', logo: require('../assets/icons8-typescript-100.png') },
    { name: 'C++', logo: require('../assets/icons8-c++-100.png') },
    { name: 'PostgreSQL', logo: require('../assets/icons8-postgresql-100.png') },
    { name: 'MySQL', logo: require('../assets/icons8-mysql-80.png') },
    { name: 'Redis', logo: require('../assets/icons8-redis-logo-100.png') },
    { name: 'AWS', logo: require('../assets/icons8-aws-logo-96.png') },
    { name: 'Azure', logo: require('../assets/icons8-azure-100.png') },
    { name: 'Docker', logo: require('../assets/icons8-docker-logo-100.png') },
    { name: 'Kubernetes', logo: require('../assets/icons8-kubernetes-100.png') },
    { name: 'Jenkins', logo: require('../assets/icons8-jenkins-50.png') },
    { name: 'Git', logo: require('../assets/icons8-git-logo-100.png') },
    { name: 'Bitbucket', logo: require('../assets/bitbucket.png') },
    { name: 'Figma', logo: require('../assets/icons8-figma-100.png') },
    { name: 'HTML', logo: require('../assets/icons8-html-logo-100.png') },
    { name: 'CSS', logo: require('../assets/icons8-css-logo-100.png') },
    { name: 'Nest.js', logo: require('../assets/icons8-nestjs-50.png') },
];

const Skills = () => {
    return (
        <section className="skills-container">
            <h3 className="skills-title">SKILLS</h3>
            <div className="skills-cloud">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}  // Fade in without any y movement
                        transition={{
                            delay: index * 0.1,
                            duration: 1,  // Smooth fade-in duration
                        }}
                        whileHover={{ scale: 1.05 }} // Added hover scale for interactivity
                    >
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
