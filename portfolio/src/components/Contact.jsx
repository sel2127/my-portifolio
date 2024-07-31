import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded" id="message" rows="4"></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
