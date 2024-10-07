import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      firaMono: ['"Fira Mono"', 'monospace']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem",
        sm: "1rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#25abf2",
        primaryHover: "#2885BA",
        cards: '#3C3C3C'
      },
      dropShadow: {
        'custom-blue': '0 4px 1px rgba(26,118,168,1)',
        'custom-gray': '0 4px 1px rgba(40,40,40,1)'
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
};
export default config;
