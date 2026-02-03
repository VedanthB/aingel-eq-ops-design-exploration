import type { Config } from "tailwindcss";

/**
 * AINGEL EQ-Ops Design System
 * Brand: CLEAN | FUTURISTIC | INTELLIGENT | ASPIRATIONAL | TECHNOLOGICAL | PREMIUM
 *
 * This config implements the exact brand guidelines from the AINGEL Brand Book.
 * All tokens are production-ready for Next.js 14 + shadcn/ui integration.
 */

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════
      // COLORS - AINGEL Brand Palette
      // ═══════════════════════════════════════════════════════════════════
      colors: {
        // Core Brand Colors
        "noir-essence": {
          DEFAULT: "#161719",
          50: "#2a2b2e",
          100: "#242527",
          200: "#1e1f21",
          300: "#161719", // Base
          400: "#121314",
          500: "#0e0f10",
        },
        "cultured": {
          DEFAULT: "#F7F7F8",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F7F7F8", // Base
          300: "#EDEDEF",
          400: "#E3E3E6",
        },
        "frosted-steel": {
          DEFAULT: "#A5ADB8",
          light: "#C4CAD2",
          dark: "#8A939F",
        },
        "terra": {
          DEFAULT: "#948A86",
          light: "#AEA5A1",
          dark: "#7A716D",
        },
        "human-touch": {
          DEFAULT: "#DED9D7",
          light: "#EBE8E6",
          dark: "#C9C3C0",
        },

        // Accent Colors (Aura Gradient)
        "coral": {
          DEFAULT: "#C7918A",
          50: "#F5E8E6",
          100: "#EBCFCB",
          200: "#DEB5AE",
          300: "#D19B93",
          400: "#C7918A", // Base - Primary accent
          500: "#B8756C",
          600: "#A15E55",
          700: "#7D4942",
          gradient: {
            from: "#C7918A",
            to: "#A68A98",
          },
        },
        "mauve": {
          DEFAULT: "#A68A98",
          light: "#BDA5B0",
          dark: "#8F6F80",
        },

        // Semantic Colors
        "critical": "#E54D4D",
        "warning": "#E5A84D",
        "success": "#4DE56A",
        "action-red": "#C75C5C",
        "review": "#8B7355",

        // Status Colors (from dashboard screenshots)
        "status": {
          active: "#4ADE80",
          investigating: "#FACC15",
          resolved: "#60A5FA",
          high: "#EF4444",
          medium: "#F97316",
          low: "#22C55E",
        },
      },

      // ═══════════════════════════════════════════════════════════════════
      // TYPOGRAPHY - Outfit Font Family
      // ═══════════════════════════════════════════════════════════════════
      fontFamily: {
        // Primary font - Outfit (Google Fonts)
        outfit: ["Outfit", "system-ui", "sans-serif"],
        // Alias for convenience
        sans: ["Outfit", "system-ui", "sans-serif"],
        // Monospace for code/data
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      fontSize: {
        // Display sizes
        "display-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "300" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "300" }],

        // Heading sizes
        "heading-xl": ["1.5rem", { lineHeight: "1.3", fontWeight: "400" }],
        "heading-lg": ["1.25rem", { lineHeight: "1.35", fontWeight: "400" }],
        "heading-md": ["1.125rem", { lineHeight: "1.4", fontWeight: "400" }],
        "heading-sm": ["1rem", { lineHeight: "1.4", fontWeight: "400" }],

        // Body sizes
        "body-lg": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],

        // Label/caption
        "label": ["0.75rem", { lineHeight: "1.4", fontWeight: "400", letterSpacing: "0.02em" }],
        "caption": ["0.6875rem", { lineHeight: "1.4", fontWeight: "400" }],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
      },

      // ═══════════════════════════════════════════════════════════════════
      // SPACING & SIZING
      // ═══════════════════════════════════════════════════════════════════
      borderRadius: {
        "brand": "8px", // Consistent 8px corner radius
        "brand-sm": "6px",
        "brand-lg": "12px",
        "brand-xl": "16px",
      },

      spacing: {
        // Custom spacing scale
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      // ═══════════════════════════════════════════════════════════════════
      // SHADOWS & EFFECTS
      // ═══════════════════════════════════════════════════════════════════
      boxShadow: {
        // Glassmorphism shadows
        "glass": "0 8px 32px rgba(0, 0, 0, 0.25)",
        "glass-sm": "0 4px 16px rgba(0, 0, 0, 0.2)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.3)",

        // Card shadows
        "card": "0 2px 8px rgba(0, 0, 0, 0.15)",
        "card-hover": "0 4px 16px rgba(0, 0, 0, 0.2)",

        // Glow effects (coral accent)
        "glow-coral": "0 0 20px rgba(199, 145, 138, 0.3)",
        "glow-coral-lg": "0 0 40px rgba(199, 145, 138, 0.4)",

        // Inner shadows for depth
        "inner-subtle": "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
      },

      // ═══════════════════════════════════════════════════════════════════
      // BACKDROP & GLASSMORPHISM
      // ═══════════════════════════════════════════════════════════════════
      backdropBlur: {
        xs: "2px",
        "glass": "12px",
        "glass-heavy": "24px",
      },

      // ═══════════════════════════════════════════════════════════════════
      // ANIMATIONS
      // ═══════════════════════════════════════════════════════════════════
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "fade-in-up": "fadeInUp 0.4s ease-out",
        "fade-in-down": "fadeInDown 0.4s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        "pulse-coral": "pulseGlow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(199, 145, 138, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(199, 145, 138, 0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      // ═══════════════════════════════════════════════════════════════════
      // BACKGROUNDS & GRADIENTS
      // ═══════════════════════════════════════════════════════════════════
      backgroundImage: {
        // Aura gradient (primary brand gradient)
        "aura-gradient": "linear-gradient(135deg, #C7918A 0%, #A68A98 100%)",
        "aura-gradient-horizontal": "linear-gradient(90deg, #C7918A 0%, #A68A98 100%)",
        "aura-gradient-vertical": "linear-gradient(180deg, #C7918A 0%, #A68A98 100%)",

        // Subtle gradients for backgrounds
        "noir-gradient": "linear-gradient(180deg, #1e1f21 0%, #161719 100%)",
        "noir-radial": "radial-gradient(ellipse at top, #242527 0%, #161719 70%)",

        // Glassmorphism overlays
        "glass-overlay": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",

        // Halftone pattern (brand element)
        "halftone": "radial-gradient(circle, #A5ADB8 1px, transparent 1px)",

        // Light bleak effect
        "light-bleak": "radial-gradient(ellipse at 30% 20%, rgba(199, 145, 138, 0.15) 0%, transparent 50%)",
      },

      backgroundSize: {
        "halftone": "8px 8px",
      },
    },
  },
  plugins: [
    // Add any plugins here (e.g., @tailwindcss/forms, @tailwindcss/typography)
  ],
};

export default config;
