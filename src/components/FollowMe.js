import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 
import { SiLeetcode, SiHackerrank } from "react-icons/si"; 
import { motion } from "framer-motion"; // Import framer-motion
import "../styles/FollowMe.css";

const FollowMe = () => {
  return (
    <div className="follow-me-section">
      <motion.h2 
        className="follow-me-title" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        SOCIAL
      </motion.h2>
      <div className="follow-me-icons">
        <a
          href="https://www.linkedin.com/in/chinmaya-behera-848115198/"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-me-icon linkedin"
        >
          <FaLinkedin className="follow-me-icon-img" />
        </a>
        <a
          href="https://github.com/chinmayabeheragit"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-me-icon github"
        >
          <FaGithub className="follow-me-icon-img" />
        </a>
        <a
          href="https://x.com/home?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-me-icon twitter"
        >
          <FaTwitter className="follow-me-icon-img" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/chinmayabehera82"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-me-icon hackerrank"
        >
          <SiHackerrank className="follow-me-icon-img" />
        </a>
        <a
          href="https://leetcode.com/u/stark-07/"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-me-icon leetcode"
        >
          <SiLeetcode className="follow-me-icon-img" />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
