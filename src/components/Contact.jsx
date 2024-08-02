import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      // Assuming you have an endpoint to send form data to
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });

      // Uncomment and modify the above lines to match your API endpoint
      // const result = await response.json();
      
      // Simulating a successful form submission
      setTimeout(() => {
        setFormStatus('Message sent successfully!');
      }, 1000);

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="mb-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-white">Contact Me</h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 border rounded-md" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border rounded-md" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full p-2 border rounded-md" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-900 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Send
          </button>
          {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
