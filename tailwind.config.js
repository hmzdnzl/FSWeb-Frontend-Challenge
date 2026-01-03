module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'rounded-[16px]'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '393px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};