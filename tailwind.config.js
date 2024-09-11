/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        accent: ["accent", "monospace", "sans-serif"],
        led: ["LEDLIGHT", "monospace", "sans-serif"],
        zector: ["Zector", "monospace", "sans-serif"],
        marde: ["MARDE SAUVE", "monospace", "sans-serif"],
        neuropolitical: ["neuropolitical rg", "monospace", "sans-serif"],
        pilowlava: ["Pilowlava", "monospace", "sans-serif"],
      },
      width: {
        800: "800px",
      },
      fontSize: {
        huge: "11rem",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        limee: "#a8ee7fb7",
      },
    },
  },
  plugins: [],
}
