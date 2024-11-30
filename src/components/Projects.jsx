import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A spare parts e-commerce website developed using React and Node.js.',
    details: 'This project involved developing a full-featured e-commerce platform with user authentication, product listings, a shopping cart, and payment integration.',
    github: 'https://github.com/username/ecommerce-website', // Replace with actual GitHub repo link
  },
  {
    title: 'Religious Service Management System',
    description: 'A system for managing religious services, developed with Node.js and MySQL.',
    details: 'The system includes features such as authentication, payment tracking, feedback, and event management, aimed at streamlining the operations of religious organizations.',
    github: 'https://github.com/sel2127/Religious-IMS', // Replace with actual GitHub repo link
  },
  {
    title: 'NFT Photo Auction',
    description: 'A platform for auctioning NFT photos, built with React.',
    details: 'This platform allows users to auction their NFT photos, with features like bidding, user authentication, and secure payment processing.',
    github: 'https://github.com/sel2127/auction-studio', // Replace with actual GitHub repo link
  },
  {
    title: 'Bookstore Website',
    description: 'A website for a bookstore, developed using React.',
    details: 'An online bookstore featuring a catalog of books, user reviews, and a shopping cart for purchasing books.',
    github: 'https://github.com/sel2127/E-Library', // Replace with actual GitHub repo link
  },
  {
    title: 'Mahibere Kidusan Digital Library',
    description: 'A digital library for Mahibere Kidusan, developed with Laravel.',
    details: 'This project involved creating a digital library platform to manage and provide access to religious and educational resources for Mahibere Kidusan members.',
    github: 'https://digitalliberary.eotcmk.org/', // Replace with actual URL
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mb-8 py-8">
      <h2 className="text-5xl font-bold mb-8 text-center text-primary">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" /> */}
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <button
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 mt-2"
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
};

export default Projects;
