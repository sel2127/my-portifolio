import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    try {
      const result = await emailjs.sendForm(
        'service_apf5su9',  
        'template_r6kcbxb',  
        e.target,
        'eTFVHRDY6a4oVuM1t'       
      );
      setFormStatus('Message sent successfully!');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('Error sending message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mb-8 py-8 bg-gray-800">
      <h2 className="text-5xl font-bold mb-6 text-center text-white">Contact Me</h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
          aria-live="polite"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded-md"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white font-bold py-2 px-8 rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {formStatus && <p className="mt-4 text-center text-gray-700">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
