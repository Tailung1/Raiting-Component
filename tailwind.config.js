module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // This makes sure Tailwind scans all files for classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        "black-gradient":
          "radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)",
      },
    },
  },
  plugins: [],
};
