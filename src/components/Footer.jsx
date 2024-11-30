import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 My Portfolio. All rights reserved. (Ethiopia)</p>
        <div className="mt-4">
          <a href="https://github.com/sel2127" className="mx-2 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/selina-y-910a222a0/" className="mx-2 hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/bkm31621/" className="mx-2 hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
