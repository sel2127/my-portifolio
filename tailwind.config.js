/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'], // Elegant serif fonts
      },
      colors: {
        primary: '#003366', // Deep Blue for trust and professionalism
        secondary: '#FFC107', // Vibrant Yellow for energy and positivity
        accent: '#E63946', // Bold Red for passion and attention
        background: '#F8F9FA', // Light Grey for a clean and modern look
        textPrimary: '#212529', // Dark Grey for high-contrast text
        textSecondary: '#6C757D', // Muted Grey for secondary text
      },
      spacing: {
        18: '4.5rem', // Custom spacing
      },
      borderRadius: {
        'custom': '12px', // Rounded corners for a modern feel
      },
    },
  },
  plugins: [],
};
