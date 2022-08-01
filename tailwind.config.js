/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [ './public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        "brand-blue-1": "#E5E5E5",
        "brand-gray-1": "#718096"
      }
    }
  },
  plugins: []
};
