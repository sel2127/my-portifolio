import React from 'react';
import jsLogo from '../assets/js.jpg';
import reactLogo from '../assets/react.jpg';
import nodeLogo from '../assets/node.jpg';
import expressLogo from '../assets/express.jpg';
import mysqlLogo from '../assets/mysql.jpg';
import htmlLogo from '../assets/html.jpg';
import tailwindLogo from '../assets/tailwind.jpg';
import laravellogo from '../assets/laravel.png';

const skills = [
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'laravel', logo: laravellogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-white">Skills</h2>
      <div className="flex items-center justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 m-2 rounded-lg shadow-md flex items-center">
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-12 h-12 mr-4" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
