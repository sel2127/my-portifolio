import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-8 font-serif">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Selina. All rights reserved. (Ethiopia)</p>
        <nav className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/sel2127"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/selina-y-910a222a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/bkm31621/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
