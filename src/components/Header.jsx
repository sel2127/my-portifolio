import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-6 md:px-20 shadow-md font-serif">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo Section with changed font family */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Selina Y
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0 space-x-4 text-sm md:text-base">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-secondary transition-colors"
                aria-label="About Section"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:underline hover:text-secondary transition-colors"
                aria-label="Skills Section"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline hover:text-secondary transition-colors"
                aria-label="Projects Section"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#training-certifications"
                className="hover:underline hover:text-secondary transition-colors"
                aria-label="Training and Certifications Section"
              >
                Training & Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-secondary transition-colors"
                aria-label="Contact Section"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
