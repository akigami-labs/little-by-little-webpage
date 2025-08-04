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
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="who-its-for">
        <WhoItsFor />
      </div>
      <Science />
      <div id="final-cta">
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;