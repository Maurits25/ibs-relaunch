import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem', xl: '3rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1320px' },
    },
    extend: {
      colors: {
        ibs: {
          // Bestehende Markenfarben (industriell-dunkel mit Akzent),
          // modernisiert zu konsistentem Palette-System.
          ink: '#0E1417',        // tiefes Anthrazit (Premium-Dunkel)
          graphite: '#1B252C',   // sekundäres Dunkel
          steel: '#3A4A56',      // Industrial Grey
          concrete: '#8A949C',   // Betongrau (Mid)
          fog: '#D7DBDE',        // Hellgrau Akzent
          mist: '#EEF1F3',       // Hintergrund hell
          paper: '#F8FAFB',      // Cards / Section Light
          accent: '#E87722',     // Markenakzent Orange (Handwerk/Industrie)
          accentDark: '#B85B12',
          signal: '#FFB200',     // Sekundäres Warm-Signal
          line: '#E3E7EA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Fluid Typography — verhindert Layoutbrüche & ungesunde Umbrüche
        'fluid-xs':   'clamp(0.78rem, 0.74rem + 0.18vw, 0.88rem)',
        'fluid-sm':   'clamp(0.88rem, 0.82rem + 0.22vw, 0.98rem)',
        // Fluid Typography — Mobile-first kalibriert.
        // Min-Werte gehen tiefer, damit auf 360-400px-Devices lange Komposita
        // (Industriebodensanierung, Epoxidharz­beschichtung) ohne Hyphenation passen.
        'fluid-base': 'clamp(0.95rem, 0.90rem + 0.20vw, 1.10rem)',
        'fluid-lg':   'clamp(1.05rem, 0.95rem + 0.40vw, 1.30rem)',
        'fluid-xl':   'clamp(1.15rem, 1.00rem + 0.65vw, 1.55rem)',
        'fluid-2xl':  'clamp(1.30rem, 1.10rem + 0.95vw, 1.95rem)',
        'fluid-3xl':  'clamp(1.50rem, 1.20rem + 1.40vw, 2.55rem)',
        'fluid-4xl':  'clamp(1.70rem, 1.30rem + 1.85vw, 3.35rem)',
        'fluid-5xl':  'clamp(1.90rem, 1.40rem + 2.40vw, 4.20rem)',
        'fluid-6xl':  'clamp(2.10rem, 1.50rem + 2.90vw, 5.20rem)',
      },
      spacing: {
        'fluid-1':  'clamp(0.40rem, 0.35rem + 0.20vw, 0.55rem)',
        'fluid-2':  'clamp(0.65rem, 0.55rem + 0.40vw, 0.90rem)',
        'fluid-3':  'clamp(0.90rem, 0.75rem + 0.60vw, 1.30rem)',
        'fluid-4':  'clamp(1.20rem, 0.95rem + 0.90vw, 1.80rem)',
        'fluid-5':  'clamp(1.60rem, 1.20rem + 1.30vw, 2.50rem)',
        'fluid-6':  'clamp(2.00rem, 1.50rem + 1.80vw, 3.20rem)',
        'fluid-7':  'clamp(2.60rem, 1.90rem + 2.40vw, 4.20rem)',
        'fluid-8':  'clamp(3.40rem, 2.40rem + 3.20vw, 5.60rem)',
        'fluid-9':  'clamp(4.20rem, 2.80rem + 4.50vw, 7.50rem)',
        'section':  'clamp(3.50rem, 2.40rem + 4.50vw, 7.00rem)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(14,20,23,0.06), 0 8px 24px -8px rgba(14,20,23,0.08)',
        'card': '0 1px 2px rgba(14,20,23,0.04), 0 8px 30px -10px rgba(14,20,23,0.10)',
        'hover': '0 4px 8px rgba(14,20,23,0.06), 0 24px 48px -16px rgba(14,20,23,0.18)',
        'accent': '0 6px 18px -4px rgba(232,119,34,0.45)',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'shine': 'shine 2.4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        'grid-dark':  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
export default config
