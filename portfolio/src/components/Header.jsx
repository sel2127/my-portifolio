import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-6 mb-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="mx-2 hover:underline">About</a>
          <a href="#skills" className="mx-2 hover:underline">Skills</a>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
