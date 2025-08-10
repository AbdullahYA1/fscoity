/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00ff41',
        'cyber-cyan': '#00bcd4',
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'digital-rain': 'digitalRain linear infinite',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'skill-bar': 'skillBar 1.5s ease-out forwards',
        'project-card': 'projectCard 1s ease-out forwards',
      },
      keyframes: {
        slideLeft: {
          'from': { transform: 'translateX(-100px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          'from': { transform: 'translateX(100px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        skillBar: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        projectCard: {
          'from': { opacity: '0', transform: 'translateY(50px) rotateX(10deg)' },
          'to': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
        },
        digitalRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}