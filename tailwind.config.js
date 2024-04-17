/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      // #262837
      // #1f2937
      // #1f2937eb

      backgroundColor: {
        'first': '#ec7c6a',
        'first-hover': '#1f1d2b',
        'second': '#6c757d',
        'back1': '#1f2937',
        'back2': '#1F1D2B',
      },
      textColor: {
        'txt1': '#e5e7eb',
        'txt2': '#808183',
        'first': '#ec7c6a',
        'back1': '#262837',
        'back2': '#1F1D2B',
      },
      borderColor: {
        'first': '#ec7c6a',
        'highlight2':'#007bff' 
      },
      gradientColorStops: {
        'first': '#ec7c6a',
        'second': '#6c757d',
        'firstDanger': '#e45406',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
