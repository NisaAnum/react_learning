// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img src="./logo.jpg" alt="Our Team" className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-4" />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">About Us</h1>
          <p className="text-lg text-center md:text-left max-w-prose mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum eros. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Integer vel odio nec mi tempor dignissim. Phasellus bibendum, orci ac cursus
            venenatis, mi neque hendrerit orci, sit amet gravida purus neque eget tortor. Donec a tempor lorem, at rhoncus elit. Sed
            scelerisque, arcu et commodo fermentum, leo nunc efficitur lorem, at aliquet ligula nunc in augue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
