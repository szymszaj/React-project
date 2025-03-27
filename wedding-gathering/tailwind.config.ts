import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        wedding: {
          primary: "#f5f5f7",
          secondary: "#eaeaec",
          accent: "#86868b",
          dark: "#1d1d1f",
          muted: "#f2f2f2",
          gold: "#d4af37",
          rose: "#e0c9c9",
          sage: "#d4e2d4",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["SF Pro Display", "Inter", "sans-serif"],
        serif: ["Garamond Premier Pro", "Garamond", "serif"],
        display: ["Optima", "serif"],
      },
      boxShadow: {
        neumorph:
          "10px 10px 20px rgba(0, 0, 0, 0.05), -10px -10px 20px rgba(255, 255, 255, 0.8)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.05)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
        },
        expand: {
          "0%": {
            height: "100px",
            opacity: "0.8",
          },
          "100%": {
            height: "400px",
            opacity: "1",
          },
        },
        contract: {
          "0%": {
            height: "400px",
            opacity: "1",
          },
          "100%": {
            height: "100px",
            opacity: "0.8",
          },
        },
        reveal: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "blur-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-out": "fade-out 0.6s ease-out",
        expand: "expand 0.5s ease-out forwards",
        contract: "contract 0.5s ease-out forwards",
        reveal: "reveal 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        "blur-in": "blur-in 0.8s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
