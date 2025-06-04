/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[class~="light"]'],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Dark mode colors (default)
      darkBrown: "#021729",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9", // This will be used for text in dark mode
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      darkerCyan: "#0081b1", // This will be used for text in light mode
      orange: "#ffde21",
      grey: "#102f41",
      lightGrey: "#f1e1d9",
      darkGrey: "#3f4441",
      fill: "#F5C9B3",

      // Light mode colors
      light: {
        darkBrown: "#F4F5F7", // خلفية رمادية ناعمة - بديلة لداكنة
        black: "#111827", // أسود أنيق بلمسة رمادية (مناسب للنصوص الداكنة)
        white: "#FFFFFF", // أبيض نقي
        cyan: "#38BDF8", // Cyan رئيسي مشرق (أزرار وروابط)
        lightCyan: "#7DD3FC", // Cyan فاتح للعناصر المساعدة
        darkCyan: "#0EA5E9", // Cyan غامق للتفاعل Hover
        darkerCyan: "#0369A1", // Cyan أغمق للنصوص المهمة أو الزر عند الضغط
        orange: "#FBBF24", // برتقالي دافئ مشرق
        grey: "#E5E7EB", // رمادي خفيف (حدود أو خلفيات صامتة)
        lightGrey: "#F9FAFB", // رمادي شبه أبيض – خلفيات عامة مريحة
        darkGrey: "#9CA3AF", // رمادي متوسط للنصوص المساعدة أو الغير فعالة
        fill: "#FEF3C7", // لون تعبئة خفيف (أصفر فاتح جداً) — مثل تلميحات
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
  plugins: [],
};
