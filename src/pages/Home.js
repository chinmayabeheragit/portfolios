// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Project from '../components/Project';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certification from '../components/Certification';
import FollowMe from '../components/FollowMe';

function Home() {
    return (
        <div className="p-5">
            <section id="about" className="mt-8">
                <About />
            </section>
            <section id="projects" className="mt-8">
                <Project />
            </section>
            <section id="experience" className="mt-8">
                <Experience />
            </section>
            <section id="education" className="mt-8">
                <Education />
            </section>
            <section id="skills" className="mt-8">
                <Skills />
            </section>
            <section id="certificates" className="mt-8">
                <Certification />
            </section>
            <section id="contact" className="mt-8">
                <FollowMe />
            </section>
        </div>
    );
}

export default Home;
