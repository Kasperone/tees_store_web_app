/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue-1': '#E5E5E5',
        'brand-blue-primary': '#3182CE',
        'brand-gray-light': '#4A5568',
        'brand-gray-1': '#718096',
        'bg-brand-gray': '#E5E5E5',
      },
    },
  },
  plugins: [],
};
