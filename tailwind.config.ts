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
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%"
          }
        }
      },
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
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)', easing: 'ease-in-out' }, 
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        jump: 'jump 0.8s cubic-bezier(0.42, 0, 0.58, 1) infinite',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
};
export default config;
