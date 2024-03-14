import React from "react";
// import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Contact us</h1>
        </div>
      </header>
      <div className="container mx-auto py-12 flex flex-col lg:flex-row">
        {/* Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full h-96"
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.899494966597!2d-73.98542868460034!3d40.748817779323256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c4fe954aaa%3A0x1f6f38f6ad8bfcde!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1610401061683!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Get in Touch */}
        <div className="w-full lg:w-1/2 px-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            We'd love to hear from you! Send us a message and we'll get back to
            you as soon as possible.
          </p>
          <div className="flex items-center mb-4">
            {/* <FaPhone className="text-blue-500 mr-2" /> */}
            <span className="text-gray-700">+1 123 456 7890</span>
          </div>
          <div className="flex items-center mb-4">
            {/* <FaEnvelope className="text-blue-500 mr-2" /> */}
            <span className="text-gray-700">example@example.com</span>
          </div>
          {/* <div className="flex mb-4">
            <FaFacebook className="text-blue-500 mr-2 cursor-pointer hover:text-blue-700" />
            <FaTwitter className="text-blue-500 mr-2 cursor-pointer hover:text-blue-700" />
            <FaLinkedin className="text-blue-500 mr-2 cursor-pointer hover:text-blue-700" />
          </div> */}
          <form>{/* Your form fields here */}</form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
