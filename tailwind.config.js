module.exports = {
  darkMode: "class",
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light-color": "var(--primary-light-color)",
        "secondary-light-color": "var(--secondary-light-color)",
        "button-light-color": "var(--button-light-color)",
        "button-light-hover-color": "var(--button-light-hover-color)",
        "text-light-color": "var(--text-light-color)",
        "muted-light-color": "var(--muted-light-color)",
      },
    },
    screens: {
      md: "780px",
    },
  },
  plugins: [],
};
