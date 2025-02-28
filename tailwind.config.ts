import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: '#F4F0E4',
      },
      screens: {
        'xs': {'max': '400px'},
      },
      fontFamily: {
        moul: ['var(--font-moul)', 'sans-serif'],
        battambang: ['var(--font-battambang)', 'sans-serif'],
        tangerine: ['var(--font-tangerine)', 'cursive'],
        times: ['Times New Roman', 'serif'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
