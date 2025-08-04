/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#F8FAFC',
        'primary-text': '#1E293B',
        'secondary-text': '#64748B',
        'primary-accent': '#3B82F6',
        'gentle-purple': '#8B5CF6',
        'growth-green': '#10B981',
        'muted-gray': '#6B7280',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};