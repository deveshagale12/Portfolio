import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Devesh Prakash Agale</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
