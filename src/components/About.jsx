import React, { useState, useEffect } from 'react';
import photo from '../assets/my.jpg';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Hi, I am Selina",
      content:
        "I am a passionate software developer with a B.Sc. in Software Engineering, specializing in building user-friendly web applications with React and modern technologies.",
      image: photo,
    },
    {
      title: "My Mission",
      content:
        "I strive to create innovative solutions that meet the unique needs of users, delivering high-quality products and services. I am always eager to learn and adapt to new challenges in the tech world.",
      image: photo,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="about" className="relative py-4 w-full bg-gray-50 font-serif">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Profile Container */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Profile Image */}
          <img
            src={slides[currentSlide].image}
            alt="Profile"
            className="w-48 h-48 lg:w-60 lg:h-60 rounded-lg shadow-xl mb-6 object-cover" // Added more prominent shadow
            style={{ imageRendering: 'optimizeQuality' }}  // Enhance image quality rendering
          />
          {/* Business Card Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Selina Yeshanew</h2>
            <p className="text-gray-700 mb-1">Software Engineer</p>
            <p className="text-gray-600 text-sm">selinayeshanew21@gmail.com</p>
            <p className="text-gray-600 text-sm">0993758095</p>
          </div>
        </div>

        {/* Slide Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-primary">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            {slides[currentSlide].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
