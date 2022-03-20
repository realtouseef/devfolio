module.exports = {
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
        "text-light-color": "var(--text-light-color)",
        "muted-light-color": "var(--muted-light-color)",
      },
    },
  },
  plugins: [],
};
