import React from 'react';
import EmailSignup from './EmailSignup';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-accent/5 to-gentle-purple/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-text mb-6">
          Ready to Make Gentle Progress?
        </h2>
        <p className="text-xl text-secondary-text mb-12">
          Stop fighting with your to-do list. Join our waitlist to be the first to know when we launch.
        </p>
        
        <EmailSignup 
          placeholder="Enter your email address"
          buttonText="Join the Waitlist"
          className="max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default FinalCTA;