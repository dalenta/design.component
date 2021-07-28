// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      neutral: {
        dark: "#000D23",
        light: "#FFFFFF",
      },
      gray: {
        jet: "#292929",
        davys: "#5C5C5C",
        spain: "#8F8F8F",
        silver: "#C2C2C2",
        culture: "#F5F5F5",
      },
      blue: {
        oxford: "#002952",
        shark: "#0025B8",
        hedgehog: "#1F4BFF",
        cornflower: "#859DFF",
        magnolia: "#EBEEFF",
      },
      green: {
        forest: "#042A18",
        viggie: "#086336",
        mantis: "#0D9B54",
        mint: "#19EB82",
        nyanza: "#ECFEF5",
      },
      red: {
        sienna: "#52001B",
        engine: "#B80006",
        dragon: "#FF1F26",
        coral: "#FF8589",
        blush: "#FFEBEB",
      },
      orange: {
        seal: "#522700",
        mahogany: "#522700",
        pumpkin: "#FF711F",
        salmon: "#FFB185",
        seashell: "#FFF3EB",
      },
      purple: {
        russia: "#210052",
        violet: "#8100B8",
        electric: "#BC1FFF",
        heliotrop: "#DA85FF",
        pale: "#FAEBFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
