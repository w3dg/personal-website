/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif", "ui-sans-serif", "system-ui"],
    },
    extend: {
      keyframes: {
        fadeX: {
          "0%": { transform: "translate(20%)", opacity: 0 },
          "100%": { transform: "translate(0%)", opacity: 1 },
        },
        inverseFadeX: {
          "0%": { transform: "translate(-20%)", opacity: 0 },
          "100%": { transform: "translate(0%)", opacity: 1 },
        },
        fadeYUp: {
          "0%": { transform: "translate(0, 20%)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
      animation: {
        fadeX: "fadeX 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19)  forwards",
        inverseFadeX: "inverseFadeX 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards",
      },
    },
  },
  plugins: [],
};
