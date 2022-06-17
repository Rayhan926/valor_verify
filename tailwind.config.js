module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000075",
        "primary-hover": "#00005A",
        secondary: "#E3B900",
        dark: {
          700: "#3F3F44",
          800: "#1A1A1A",
          900: "#02023D",
        },
        "shadow-primary": "#E5F1FF",
        "shadow-secondary": "#FFF9E1",
      },
      fontFamily: {
        "gorga-light": ["GorgaGrotesque-Light", "sans-serif"],
        "gorga-regular": ["GorgaGrotesque-Regular", "sans-serif"],
        "gorga-bold": ["GorgaGrotesque-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
