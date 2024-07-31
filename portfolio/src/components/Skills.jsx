import React from 'react';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MySQL',
  'HTML',
  'CSS',
  'Tailwind CSS',
];

const Skills = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-3 m-2 rounded-lg shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
