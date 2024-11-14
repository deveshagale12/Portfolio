import React from 'react';

const skills = ['JavaScript', 'React', 'CSS', 'Tailwind CSS', 'Node.js'];

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="flex justify-center flex-wrap">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
