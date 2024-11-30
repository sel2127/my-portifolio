import React, { useState } from 'react';
import CertificationModal from './CertificationModal';
import iie from '../assets/certificates/iie.png';
import dereja from '../assets/certificates/dereja.png';
import orange from '../assets/certificates/modelling.png';
import orange1 from '../assets/certificates/frontend.png';
import womenInTech from '../assets/certificates/hackathon.png';  // Add the image for Women in Tech Hackathon
import kEgov from '../assets/certificates/k-egov.png';  // Add the image for K-Egov Framework1

const TrainingCertifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [modalImage, setModalImage] = useState(null); // Track the image to show in the modal

  const trainings = [
    {
      title: 'PRESIDENTIAL MENTORSHIP PROGRAM',
      institution: 'The Power of International Education',
      description: 'A comprehensive course covering front-end and back-end web development technologies.',
      image: iie
    },
    {
      title: 'DEREJA ACADEMY ACCELERATOR PROGRAM',
      institution: 'Dereja',
      description: 'A course on building mobile applications using React Native.',
      image: dereja
    },
    {
      title: '2D AND 3D MODELING FOR MODERN DEVELOPMENT',
      institution: 'Orange Digital Center',
      description: 'A comprehensive course covering front-end and back-end web development technologies.',
      image: orange
    },
    {
      title: 'FRONT END DEVELOPMENT WITH ANGULAR',
      institution: 'Orange Digital Center',
      description: 'A course on building mobile applications using React Native.',
      image: orange1
    },
    {
      title: 'WOMEN IN TECH HACKATHON',
      institution: 'UN Women',
      description: 'A hackathon event focusing on empowering women in the tech industry.',
      image: womenInTech
    },
    {
      title: 'INTRODUCTION TO K-EGOV FRAMEWORK1',
      institution: 'UNESCO University Network Member',
      description: 'A course introducing the K-Egov framework for modern digital governance.',
      image: kEgov
    }
  ];

  const handleImageClick = (image) => {
    setModalImage(image);  // Set the clicked image to display in the modal
  };

  const handleCloseModal = () => {
    setModalImage(null); // Close the modal when clicked outside
  };

  return (
    <section id="training-certifications" className="mb-8 font-serif">
      <h2 className="text-5xl font-bold mb-8 text-center text-primary">Training & Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((training, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{training.title}</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Institution:</strong> {training.institution}</p>
            <p className="text-sm text-gray-600 mb-4">{training.description}</p>
            <button
              onClick={() => handleImageClick(training.image)} // Open modal to view image
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
            >
              View Image
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying the image */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal} // Close modal on clicking outside the image
        >
          <div 
            className="relative bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <img src={modalImage} alt="Certification" className="max-w-full max-h-[80vh] object-contain" />
            <button 
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              onClick={handleCloseModal} // Close modal when clicking close button
            >
              X
            </button>
          </div>
        </div>
      )}

      {selectedCertification && (
        <CertificationModal 
          certification={selectedCertification} 
          onClose={() => setSelectedCertification(null)} 
        />
      )}
    </section>
  );
}

export default TrainingCertifications;
