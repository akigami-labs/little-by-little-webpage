import React from 'react';
import { BookOpen, PenSquare, Briefcase } from 'lucide-react';

const WhoItsFor = () => {
  const personas = [
    {
      icon: BookOpen,
      title: "The Student",
      description: "For when academic perfectionism makes it impossible to start that big essay or research project.",
      color: "text-primary-accent"
    },
    {
      icon: PenSquare,
      title: "The Creative Professional",
      description: "For overcoming the \"blank page\" anxiety and the fear of not meeting subjective client expectations.",
      color: "text-gentle-purple"
    },
    {
      icon: Briefcase,
      title: "The Overwhelmed Manager",
      description: "For cutting through the noise of constant meetings and decision fatigue to focus on what truly matters.",
      color: "text-growth-green"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-text mb-4">
            A Kinder Tool for...
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-primary-bg rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-md mx-auto flex items-center justify-center">
                  <persona.icon className={`h-8 w-8 ${persona.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-4">
                {persona.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;