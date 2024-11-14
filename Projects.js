import React from 'react';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A complete e-commerce application with product listing, cart, and checkout functionality.',
    link: '#'
  },
  {
    title: 'Weather App',
    description: 'Displays weather information by fetching data from an external API.',
    link: '#'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
