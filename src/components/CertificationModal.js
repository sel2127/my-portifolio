import React from 'react';

const CertificationModal = ({ certification, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-4 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{certification.title}</h2>
        <img 
          src={certification.image} 
          alt={certification.title} 
          className="w-full h-64 object-cover mb-4 rounded-md" 
        />
        <p className="mb-4">{certification.description}</p>
      </div>
    </div>
  );
}

export default CertificationModal;
