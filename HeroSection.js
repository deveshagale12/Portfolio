import React from 'react';

const HeroSection = () => {
  return (
    <div id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="text-center p-4">
        <h2 className="text-5xl font-semibold">Hi, I'm Devesh Prakash Agale</h2>
        <p className="mt-4 text-lg">Front-End Developer</p>
        <a href="#projects" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition duration-300">View My Work</a>
      </div>
    </div>
  );
};

export default HeroSection;
