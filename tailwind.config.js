/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headerBgColor: '#3f51b5',
        hoverColor: '#303f9f',
      },
      screens: {
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '519px' },
        ssm: { max: '375px' },
        sm2: { min: '520px', max: '767px' },
        largeScreen: { min: '1399px' },
        extraLargeScreen: { min: '1540px' },
      },
      fontFamily: {
        bigFont: 'Bebas Neue, sans-serif',
      },
      lineHeight: {
        'extra-tight': '0.75',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
