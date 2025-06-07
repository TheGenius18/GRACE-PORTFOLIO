/** @type {import('tailwindcss').Config} */
import dir from "tailwindcss-dir";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // نفس اللي عندك
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // نفس الألوان
      darkBrown: "#021729",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      darkerCyan: "#0081b1",
      orange: "#ffde21",
      grey: "#102f41",
      lightGrey: "#f1e1d9",
      darkGrey: "#3f4441",
      fill: "#F5C9B3",
      light: {
        darkBrown: "#F4F5F7",
        black: "#111827",
        white: "#FFFFFF",
        cyan: "#38BDF8",
        lightCyan: "#7DD3FC",
        darkCyan: "#0EA5E9",
        darkerCyan: "#0369A1",
        orange: "#FBBF24",
        grey: "#E5E7EB",
        lightGrey: "#F9FAFB",
        darkGrey: "#9CA3AF",
        fill: "#FEF3C7",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 210, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(9, 26, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 19, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(24, 169, 79, 0.5)",
        purpulMediumShadow: "10px 10px 2000px 150px rgba(224, 19, 249, 0.5)",
        whiteMediumShadow: "10px 10px 2000px 150px rgba(255, 255, 255, 0.5)",
        yallowMediumShadow: "10px 10px 2000px 150px rgba(255, 25, 255, 0.1)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [
    dir(), // ✅ هذا يضيف دعم RTL و LTR
    require("@tailwindcss/aspect-ratio"), // إن كنت تستخدمه
  ],
};
