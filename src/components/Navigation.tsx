import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary-bg/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Little by Little Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-primary-text">Little by Little</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-secondary-text hover:text-primary-text transition-colors duration-200">
              Features
            </a>
            <a href="#science" className="text-secondary-text hover:text-primary-text transition-colors duration-200">
              The Science
            </a>
            <a href="#blog" className="text-secondary-text hover:text-primary-text transition-colors duration-200">
              Blog
            </a>
            <button className="bg-primary-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;