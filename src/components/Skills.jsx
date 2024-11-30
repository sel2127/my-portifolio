import React from 'react';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png';
import expressLogo from '../assets/express.png';
import mysqlLogo from '../assets/mysql.png';
import htmlLogo from '../assets/html.png';
import tailwindLogo from '../assets/tailwind.png';
import laravellogo from '../assets/laravel.png';
import mongodbLogo from '../assets/mongodb.png';
import postgresLogo from '../assets/postgres.png';
import gitLogo from '../assets/git.png';

const skills = [
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'Laravel', logo: laravellogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'PostgreSQL', logo: postgresLogo },
  { name: 'Git', logo: gitLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="mt-8 w-full overflow-x-hidden bg-gray-800 py-12 font-serif">
      <h2 className="text-5xl font-bold mb-8 text-center text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 sm:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-20 h-20 sm:w-24 sm:h-24 mb-4 object-contain"
            />
            <span className="text-sm sm:text-lg font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
