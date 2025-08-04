import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import Science from './components/Science';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg font-inter">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoItsFor />
      <Science />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;