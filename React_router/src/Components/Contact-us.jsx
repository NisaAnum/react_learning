// ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-center md:text-left max-w-prose mb-4">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else,
            our team is ready to answer all your questions.
          </p>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name" 
                type="text" 
                placeholder="Your Name" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                placeholder="Your Email" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="message" 
                rows="4" 
                placeholder="Your Message" 
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
              //  onClick={alert("Thank you for Contacting Us!!")}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
