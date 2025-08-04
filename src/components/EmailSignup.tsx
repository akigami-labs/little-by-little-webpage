import React, { useState } from 'react';

interface EmailSignupProps {
  placeholder: string;
  buttonText: string;
  className?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ placeholder, buttonText, className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center px-6 py-3 bg-growth-green/10 text-growth-green rounded-lg">
          <span className="font-medium">Thanks! We'll be in touch soon.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none transition-all duration-200"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-primary-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default EmailSignup;