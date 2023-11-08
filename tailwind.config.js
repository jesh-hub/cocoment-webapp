/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', '"Noto Sans KR"'],
      },
      colors: {
        // https://www.shutterstock.com/ko/blog/101-free-color-combinations-design-inspiration/
        'ccmt-neutral-100': '#e1dcd9',
        'ccmt-neutral-200': '#8f8681',
        'ccmt-neutral-300': '#a67f78',
        'ccmt-neutral-400': '#32435f',
      },
    },
  },
  plugins: [],
};
