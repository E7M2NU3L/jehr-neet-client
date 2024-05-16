import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark : { 'amaranth_purple': { DEFAULT: '#a30b37', 100: '#20020b', 200: '#410516', 300: '#610720', 400: '#82092b', 500: '#a30b37', 600: '#e1104b', 700: '#f24274', 800: '#f681a2', 900: '#fbc0d1' }, 'rich_black': { DEFAULT: '#051014', 100: '#010304', 200: '#020708', 300: '#030a0c', 400: '#040d10', 500: '#051014', 600: '#184e62', 700: '#2c8caf', 800: '#64b9d8', 900: '#b1dcec' }, 'periwinkle': { DEFAULT: '#b7b5e4', 100: '#18163c', 200: '#2f2b78', 300: '#4741b4', 400: '#7c78ce', 500: '#b7b5e4', 600: '#c5c3e9', 700: '#d3d2ef', 800: '#e2e1f4', 900: '#f0f0fa' }, 'royal_purple': { DEFAULT: '#7353ba', 100: '#170f27', 200: '#2e1f4d', 300: '#442e74', 400: '#5b3e9b', 500: '#7353ba', 600: '#9076c8', 700: '#ac98d6', 800: '#c8bae4', 900: '#e3ddf1' }, 'majorelle_blue': { DEFAULT: '#6e44ff', 100: '#0e0040', 200: '#1c0081', 300: '#2a00c1', 400: '#3902ff', 500: '#6e44ff', 600: '#8968ff', 700: '#a68eff', 800: '#c4b4ff', 900: '#e1d9ff' } },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config