/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#233B6E",
        primarySurface: "#173172",
        black: "#000000",
        black2: "#0B0C0D",
        inActive: "#8FA0AD",
        text: "#4D4D4D",
        freshWhite: "#F8FFF9",
        tertiary: "#CED3E1",
        borderColor: "#C4C4C480",
        teamBorder: "#EAECF0",
        blueAlice: "#ECF5FE",
        formBorder: "#B5B7C4",
        placeholder: "#CDCFDB",
      },
      backgroundImage: {
        "bg-abstract": "url('/assets/images/bg-abstract.png)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
