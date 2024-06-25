// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutUs from './About-us.jsx';

const Header = () => {
  return (
    <header className="bg-gray-400 text-white rounded-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo justify-start">
          <img src="/logo.jpg" alt="Logo" className="h-10"/>
        </div>
        <nav className="flex-grow flex justify-center space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-red-700 text-md font-bold" : "text-white text-md font-bold"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/About" 
            className={({ isActive }) => isActive ? "text-red-700  text-md font-bold" : "text-white text-md font-bold"}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact-us" 
            className={({ isActive }) => isActive ? "text-red-700  text-md font-bold" : "text-white text-md font-bold"}
          >
            Contact Us
          </NavLink>
          <NavLink 
            to="/Github" 
            className={({ isActive }) => isActive ? "text-red-700  text-md font-bold" : "text-white text-md font-bold"}
          >
            Github
          </NavLink>
          <NavLink 
            to="/User" 
            className={({ isActive }) => isActive ? "text-red-700  text-md font-bold" : "text-white text-md font-bold"}
          >
            User
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
