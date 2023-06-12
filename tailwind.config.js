/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "text": "#bbc6ce",
        "outline-hover": "#59b4ff",
        "outline": "#3ea0f0",
        "card-bg": "#233748",
        "card-bg-hover": "#2a4a5f",
        "card-bg-active": "#305572",
        "card-border": "#758998",
        "bg": "#18232c",
      },
      secondary: {
        "default": "#edf0f3",
        "default-darker": "#dce0e5",
        "default-darkest": "#ccd0e0",
        "text": "#000000"
      }
    },
    fontSize: {
      h1: [
        "2.125rem",
        {
          lineHeight: "2.875rem",
          letterSpacing: "0.016rem",
          fontWeight: "700"
        }
      ],
      h2: [
        "1.5rem",
        {
          lineHeight: "2.125rem",
          letterSpacing: "0",
          fontWeight: "600"
        }
      ],
      h3: [
        "1.5rem",
        {
          lineHeight: "2.125rem",
          letterSpacing: "0",
          fontWeight: "400"
        }
      ],
      h4: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.009rem",
          fontWeight: "400"
        }
      ],
      body1: [
        "1rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "0.031rem",
          fontWeight: "400"
        }
      ],
      body2: [
        "1rem",
        {
          lineHeight: "1.375rem",
          letterSpacing: "0.031rem",
          fontWeight: "600"
        }
      ],
      subtitle1: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.016rem",
          fontWeight: "400"
        }
      ],
      subtitle2: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.016rem",
          fontWeight: "600"
        }
      ],
    },
    extend: {},
  },
  plugins: [],
};

