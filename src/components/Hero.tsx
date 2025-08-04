import React from 'react';
import EmailSignup from './EmailSignup';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg text-primary-accent font-medium mb-4">
              AI task manager for task paralysis
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-text mb-6 leading-tight">
              Productivity Without the Pressure
            </h1>
            <p className="text-xl text-secondary-text mb-8 leading-relaxed">
              A 'gentle productivity' app for the millions struggling with executive dysfunction and burnout. We use mood-aware AI to break down overwhelming tasks into small, manageable steps.
            </p>
            
            <EmailSignup 
              placeholder="Enter your email for early access"
              buttonText="Join Waitlist"
              className="mb-8"
            />
          </div>
          
          <div className="text-center">
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