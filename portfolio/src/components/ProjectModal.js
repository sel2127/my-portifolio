import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 md:w-1/2">
        <h3 className="text-xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.details}</p>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
