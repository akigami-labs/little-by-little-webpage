import React from 'react';

const Problem = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-text mb-6 leading-tight">
              When Your To-Do List Is the Burnout.
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed">
              The modern workplace is in a crisis, with 51% of employees suffering from burnout. For students and professionals alike, this leads to "task paralysis"—a cycle of anxiety and avoidance. We built a tool grounded in behavioral science to help you gently find a way forward.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-muted-gray/20 to-primary-accent/10 rounded-2xl flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-muted-gray/30 to-muted-gray/50 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-accent to-gentle-purple rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-growth-green/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gentle-purple/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;