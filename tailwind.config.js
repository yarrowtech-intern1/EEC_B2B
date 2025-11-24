module.exports = {
  content: [
    "./index.html",        // if using Vite
    "./src/**/*.{js,ts,jsx,tsx}", // include all React files
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-10px) translateX(5px)" },
        },
      },
    },
  },
  plugins: [],
};
