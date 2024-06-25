// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img src="./logo.jpg" alt="Anum learning React" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-4" />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">Welcome to Anum's React Learning Journey</h1>
          <p className="text-lg text-center md:text-left max-w-prose justify-evenly">
            Hi! I'm Anum, and I'm excited to share my journey of learning React with you. 
            React is a powerful JavaScript library for building user interfaces, 
            and I'm eager to dive into its features and capabilities. 
            Join me as I explore components, hooks, state management, and more in this exciting adventure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
