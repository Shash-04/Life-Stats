/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animationDelay: {
        5000: '5000ms',
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        beat: 'beat 1.9s ease-in-out infinite',
        spawn: 'spawn 2.5s ease-in-out infinite',
        moveleft : 'moveleft 10s linear infinite',
        spinn : 'spinn 15s linear infinite',
        orbit : 'orbit 10s linear infinite',
        scale : 'scale 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        beat: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        spawn: {
          '0%,100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.05) ' },
        },
        moveleft: {
          "0%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinn: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scale: {
          "0%": { transform: "scale(0.4)" },
          "100%": { transform: "scale(0.4)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(130px) rotate(0deg) "},
          "100%": {transform: "rotate(360deg) translateX(130px) rotate(-360deg) "},
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}