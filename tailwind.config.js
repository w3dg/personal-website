/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif", "ui-sans-serif", "system-ui"],
    },
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
    extend: {
      animation: {
        fadeX: "fadeX 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19)  forwards",
        inverseFadeX: "inverseFadeX 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards",
        // fadeyup emphasized
        fadeYUp:
          "fadeYUp 1s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) forwards 0.5s",
      },
    },
  },
  plugins: [],
};
