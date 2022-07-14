module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 5px -15px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
