import React from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-6 mb-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-3" />
          <h1 className="text-3xl font-bold">Selina</h1>
        </div>
        <nav>
          <a href="#about" className="mx-2 hover:underline">About</a>
          <a href="#skills" className="mx-2 hover:underline">Skills</a>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#training-certifications" className="mx-2 hover:underline">Training & Certifications</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
