import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="py-10 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="flex flex-col items-center bg-white shadow-xl rounded-3xl p-8 sm:p-12 transform transition-all duration-500 hover:scale-100">
          <h2 className="text-indigo-600 font-jostBold text-4xl sm:text-5xl font-bold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg font-jostRegular text-center mt-2 mb-8">
            We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="w-full max-w-2xl mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-12 py-3 text-lg rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300 ease-in-out"
              />
              <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-12 py-3 text-lg rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300 ease-in-out"
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 text-lg rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300 ease-in-out"
              />
              <FaComment className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-3 text-lg font-jostBold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            By submitting, you agree to our{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline transition duration-200"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline transition duration-200"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
