import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
