// src/pages/Projects.js
import React from 'react';
import Project from '../components/Project';

function Projects() {
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Project title="Project 1" description="A description of project 1." />
                <Project title="Project 2" description="A description of project 2." />
            </div>
        </div>
    );
}

export default Projects;
