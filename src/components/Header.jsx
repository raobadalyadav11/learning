import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo on the left */}
                <div>
                    <Link to="/">
                        <img
                            src="https://www.example.com/logo.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Navigation links in the center */}
                <nav className="hidden md:flex flex-grow justify-center">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/course">Course</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                       
                    </ul>
                </nav>

                {/* Login and Sign Up buttons on the right */}
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="text-gray-700 hover:text-gray-900">
                        Login
                    </Link>
                    <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
