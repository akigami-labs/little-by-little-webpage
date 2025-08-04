import React from 'react';
import { MessageCircle, Brain, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Tell Us How You Feel",
      description: "Select a mood that matches your energy, from \"Overwhelmed\" to \"Motivated\".",
      color: "text-primary-accent"
    },
    {
      icon: Brain,
      title: "Get Your AI-Powered Plan",
      description: "Receive a single, tiny first step in Focus Mode, or a full action plan when you're ready.",
      color: "text-gentle-purple"
    },
    {
      icon: TrendingUp,
      title: "Make Gentle Progress",
      description: "Build momentum with small, achievable tasks that work with your brain, not against it.",
      color: "text-growth-green"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-text mb-4">
            An Empathetic AI Coach That Adapts to You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center mb-4">
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-accent text-white rounded-full flex items-center justify-center text-sm font-semibold mx-auto">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-text mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;