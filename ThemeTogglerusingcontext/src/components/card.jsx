import React from 'react';

const Card = () => {
  return (
    <div className=" card max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6">
        <img src='https://i.pinimg.com/564x/56/2d/33/562d33f4efe80fd950b18a4658a518e5.jpg' />
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Card Title</h2>
        <p className="text-gray-700 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ipsum vel urna posuere suscipit.
        </p>
      </div>
    </div>
  );
};

export default Card;
