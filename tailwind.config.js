/**
 * Font utilities
 * - Use `font-heading` for Raleway-driven display and heading text
 * - Use `font-body` for Karla-driven body copy and supporting text
 */

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "var(--font-raleway)",
          "Raleway",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        body: [
          "var(--font-karla)",
          "Karla",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "var(--primary)",
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-grad)",
      },
    },
  },
  plugins: [],
};

export default config;
