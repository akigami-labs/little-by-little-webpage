import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Little by Little Logo" className="h-8 w-8" />
              <span className="text-xl font-semibold text-primary-text">Little by Little</span>
            </div>
            <p className="text-secondary-text">
              Gentle progress, one step at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Product</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="text-secondary-text hover:text-primary-text transition-colors">How It Works</button></li>
              <li><button onClick={() => document.getElementById('who-its-for')?.scrollIntoView({ behavior: 'smooth' })} className="text-secondary-text hover:text-primary-text transition-colors">Who It's For</button></li>
              <li><a href="#science" className="text-secondary-text hover:text-primary-text transition-colors">The Science</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary-text hover:text-primary-text transition-colors">About Us</a></li>
              <li><a href="#blog" className="text-secondary-text hover:text-primary-text transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-secondary-text hover:text-primary-text transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-text mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-secondary-text hover:text-primary-text transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-secondary-text hover:text-primary-text transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-secondary-text hover:text-primary-text transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-text text-sm mb-4 md:mb-0">
            © 2025 Little by Little. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#twitter" className="text-secondary-text hover:text-primary-text transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#linkedin" className="text-secondary-text hover:text-primary-text transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;