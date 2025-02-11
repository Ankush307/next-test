import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-black": "#2E2F37",
        "deep-black": "#14191C",
        "gray": "#656566",
        "off-white": "#D0D5DD",
        "custom-blue": "#007BFF",
        "custom-slate": "#475467",
      },
    },
  },
  plugins: [],
} satisfies Config;
