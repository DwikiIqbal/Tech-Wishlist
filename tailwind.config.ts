import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Jalur ini harus ada agar Tailwind scan folder app
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ini menghubungkan variabel CSS dari layout ke class Tailwind
        bodoni: ["var(--font-bodoni)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;