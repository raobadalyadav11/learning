import React from 'react';
import Team from './Team';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">About Us</h1>
        </div>
      </header>

      {/* About Content */}
      <div className="container mx-auto mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, est eget ullamcorper mollis, odio odio maximus purus, in tristique ligula dui vitae quam. Sed non urna nec magna hendrerit vehicula eget et nulla.</p>
          <p className="text-gray-700 mb-4">Quisque mattis, enim id suscipit commodo, turpis purus laoreet ipsum, et placerat arcu tellus non nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
      <Team/>
    </div>
  );
};

export default About;
