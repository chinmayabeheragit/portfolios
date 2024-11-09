import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Animation variants for the mobile menu
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.header
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="logo">CHINMAYA</h1>

            {/* Desktop Navigation */}
            <nav className="nav-links">
                {["About", "Projects", "Experience", "Education", "Skills", "Certificates", "Contact"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                        {item.toUpperCase()}
                    </a>
                ))}
            </nav>

            {/* Hamburger Icon */}
            <div className="hamburger-icon" onClick={toggleMenu}>
                <motion.div
                    animate={isMenuOpen ? { rotate: 45, y: 6, backgroundColor: "#a1c4fd" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                    className="bar"
                />
                <motion.div
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#ffffff" }}
                    className="bar"
                />
                <motion.div
                    animate={isMenuOpen ? { rotate: -45, y: -6, backgroundColor: "#a1c4fd" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                    className="bar"
                />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    className="mobile-menu"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                >
                    {["About", "Projects", "Experience", "Education", "Skills", "Certificates", "Contact"].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.toUpperCase()}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}

export default Header;
