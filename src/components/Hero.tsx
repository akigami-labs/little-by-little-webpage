import React from 'react';
import EmailSignup from './EmailSignup';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-text mb-6 leading-tight">
              Productivity Without the Pressure
            </h1>
            <p className="text-xl text-secondary-text mb-8 leading-relaxed">
              Little by Little is a mood-adaptive task manager that helps you overcome task paralysis and make gentle progress, one step at a time.
            </p>
            
            <EmailSignup 
              placeholder="Enter your email address"
              buttonText="Get Early Access"
              className="mb-8"
            />
            
            <p className="text-sm text-muted-gray">
              Join 2,847 people already on the waitlist
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/composite-image.png" 
              alt="Little by Little app interface showing before and after AI planning" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;