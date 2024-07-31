import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A spare parts e-commerce website developed using React and Node.js.',
    details: 'This project involved developing a full-featured e-commerce platform with user authentication, product listings, a shopping cart, and payment integration.',
  },
  {
    title: 'Religious Service Management System',
    description: 'A system for managing religious services, developed with Node.js and MySQL.',
    details: 'The system includes features such as authentication, payment tracking, feedback, and event management, aimed at streamlining the operations of religious organizations.',
  },
  {
    title: 'NFT Photo Auction',
    description: 'A platform for auctioning NFT photos, built with React.',
    details: 'This platform allows users to auction their NFT photos, with features like bidding, user authentication, and secure payment processing.',
  },
  {
    title: 'Bookstore Website',
    description: 'A website for a bookstore, developed using React.',
    details: 'An online bookstore featuring a catalog of books, user reviews, and a shopping cart for purchasing books.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <button 
              className="text-blue-500 hover:underline"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
