import React from 'react';
import '../Styles/Progects.css';
import crossFoto from "../images/cross.jpg";

const Progects = () => {
  const projects = [
    { title: 'AppleSale Project', description: 'Description of AppleSale project', githubLink: 'https://github.com/Nurik70/AppleSale' },
    { title: 'Project 2', description: 'Description of project 2', githubLink: 'https://github.com/yourusername/project2' },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={crossFoto} className="img-cross-foto" alt="Cross Foto" />
          <h3>{project.title}</h3>
          <a 
            href={project.githubLink} 
            className="button-link-prog" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Progects;
