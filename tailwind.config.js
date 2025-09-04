/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColor: "#030712",
        blueDeepColor: "#111827",
        blueLightColor: "#1F2937",

        imgBg: "#374151",

        textLight: "#D1D5DB",
        textColor: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
