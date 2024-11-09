import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Certification.css';

const certificateData = [
    { id: 1, name: 'Certificate 1', src: require('../assets/nodejscertificate.jpeg'), link: 'https://www.hackerrank.com/certificates/39031f5d70bd' },
    { id: 2, name: 'Certificate 2', src: require('../assets/javascript certificates.png'), link: 'https://www.hackerrank.com/certificates/bcc077743be0' },
    { id: 3, name: 'Certificate 3', src: require('../assets/pyhtoncertificate.jpeg'), link: 'https://www.hackerrank.com/certificates/8d32ea1b3b5a' },
    { id: 4, name: 'Certificate 4', src: require('../assets/udemy js.jpg'), link: 'http://ude.my/UC-5def4e8d-c389-4652-a13e-fa9c8ac90004' },

    // Add more certificates here
];

const Certification = () => {
    const [inView, setInView] = useState(false);

    const handleScroll = () => {
        const section = document.querySelector('.certification-container');
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            setInView(true);
        } else {
            setInView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="certification-container">
            <h2 className="section-title">Certifications</h2>
            <div className={`certificate-gallery ${inView ? 'show' : ''}`}>
                {certificateData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="certificate"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                    >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <img src={cert.src} alt={cert.name} className="certificate-img" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certification;
