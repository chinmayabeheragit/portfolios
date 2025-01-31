import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy project data (In real use, you can fetch this from an API or a database)
const projects = [
  { id: 1, title: "Baby Ecommerce", description: "Ecommerce site for babies" },
  { id: 2, title: "Invoice Management", description: "Manage invoices" },
  { id: 3, title: "Task Management", description: "Manage your tasks" },
  { id: 4, title: "Number Guess Game", description: "Fun number guessing game" },
  { id: 5, title: "AI Blog Generator", description: "Generate AI-powered blog posts" },
  { id: 6, title: "Public School", description: "Website for a public school" },
  { id: 7, title: "Ceya Export", description: "Export business platform" },
  { id: 8, title: "Utkal Property", description: "Real estate platform" },
  { id: 9, title: "AI Podcast Generator", description: "Generate AI-powered podcasts" },
];

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get projectId from the URL

  // Find the project with the matching ID
  const projectData = projects.find((project) => project.id === parseInt(projectId));

  if (!projectData) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-details">
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      {/* Add other project details like images, tech stack, etc. */}

      {/* Back button to navigate to the project listing page */}
      <Link to="/projects" className="back-button">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetails;
