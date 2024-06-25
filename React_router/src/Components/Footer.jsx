// Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h5 className="text-lg font-bold mb-4">Quick Links</h5>
          <nav className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className="text-md"
            >
              Home
            </NavLink>
            <NavLink 
              to="/About" 
              className="text-md"
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact-us" 
              className="text-md"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
          <h5 className="text-lg font-bold mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-500 text-center py-4">
        &copy; {new Date().getFullYear()} Anum.org. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
