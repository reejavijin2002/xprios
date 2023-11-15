// HelpdeskPage.js
import React, { useState } from 'react';

const HelpdeskPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending an email or storing the message)
    // For simplicity, let's just log the data for now
    console.log('Form submitted:', { name, email, message });
    // You may want to clear the form fields or show a confirmation message here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Helpdesk</h2>

        {/* FAQs Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
          <ul>
            <li>How do I reset my password?</li>
            <li>Where can I find the user manual?</li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="block mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded mb-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Live Chat Section (Placeholder) */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
          <p>Our live chat support is available during business hours.</p>
          {/* Add a live chat widget or integration here */}
        </section>
      </div>
    </div>
  );
};

export default HelpdeskPage;
