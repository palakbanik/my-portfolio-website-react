/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColor: "var(--primary-color)",
        blueDeepColor: "#111827",
        blueLightColor: "#1F2937",
      },
    },
  },
  plugins: [],
};
