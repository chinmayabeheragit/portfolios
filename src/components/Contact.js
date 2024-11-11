import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const FollowMe = () => {
  return (
    <div className="contact-section">
      <motion.h2 
        className="contact-title" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        CONTACT
      </motion.h2>

      <div className="contact-container">
        {/* Contact Form */}
        <form action="https://submit-form.com/UuP6M3Zo" className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chinmaya-behera-848115198/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/chinmayabeheragit" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub />
          </a>
          <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="https://www.hackerrank.com/profile/chinmayabehera82" target="_blank" rel="noopener noreferrer" className="social-icon hackerrank">
            <SiHackerrank />
          </a>
          <a href="https://leetcode.com/u/stark-07/" target="_blank" rel="noopener noreferrer" className="social-icon leetcode">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
