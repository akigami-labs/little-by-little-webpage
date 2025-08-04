import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-primary-bg/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Little by Little Logo" className="h-8 w-8" />
            <span className="text-xl font-semibold text-primary-text">Little by Little</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-secondary-text hover:text-primary-text transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('who-its-for')}
              className="text-secondary-text hover:text-primary-text transition-colors duration-200"
            >
              Who It's For
            </button>
            <button 
              onClick={() => scrollToSection('science')}
              className="text-secondary-text hover:text-primary-text transition-colors duration-200"
            >
              The Science
            </button>
            <button 
              onClick={() => scrollToSection('final-cta')}
              className="bg-primary-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-primary-text hover:text-primary-accent transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-secondary-text hover:text-primary-text transition-colors duration-200 py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('who-its-for')}
                className="block w-full text-left text-secondary-text hover:text-primary-text transition-colors duration-200 py-2"
              >
                Who It's For
              </button>
              <button 
                onClick={() => scrollToSection('science')}
                className="block w-full text-left text-secondary-text hover:text-primary-text transition-colors duration-200 py-2"
              >
                The Science
              </button>
              <button 
                onClick={() => scrollToSection('final-cta')}
                className="w-full bg-primary-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 mt-4"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;