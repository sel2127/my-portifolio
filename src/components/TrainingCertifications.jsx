import React, { useState } from 'react';
import CertificationModal from './CertificationModal';
import iie from '../assets/certificates/iie.png';
import dereja from '../assets/certificates/dereja.png';
import orange from '../assets/certificates/modeling.png';
import orange1 from '../assets/certificates/angular.png';
// Import other certification images as needed

const TrainingCertifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

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
  ];

  return (
    <section id="training-certifications" className="mb-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-white">Training & Certifications</h2>
      <div className="container mx-auto px-4">
        {trainings.map((training, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-2">{training.title}</h3>
            <p className="text-sm text-gray-700 mb-1"><strong>Institution:</strong> {training.institution}</p>
            <p className="text-sm text-gray-700 mb-4">{training.description}</p>
            <button 
              onClick={() => setSelectedCertification(training)}
              className="text-blue-500 hover:underline"
            >
              View Image
            </button>
          </div>
        ))}
      </div>
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
