/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      primary_bg: "var(--primary_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      primary_color: "var(--primary-color)",
      button_color: "var(--button-color)",
      line_color: "var(--line_color)",
      black: "var(--black)",
      purple: "var(--purple-color)",
      text_color: "var(--text_color)",
      white: "var(--white)",
      red: "var(--red)",
    },
    fontFamily: {
      GilroyNormal: ["Gilroy regular"],
      GilroyMedium: ["Gilroy medium"],
      GilroyBold: ["Gilroy bold"],
      GilroyLight: ["Gilroy light"],
      GilroySemiBold: ["Gilroy semibold"],
      GilroyExtraBold: ["Gilroy extrabold"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
