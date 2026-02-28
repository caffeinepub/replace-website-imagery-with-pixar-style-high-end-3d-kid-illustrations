import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                success: {
                    DEFAULT: 'oklch(var(--success) / <alpha-value>)',
                    foreground: 'oklch(var(--success-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 4px)',
                sm: 'calc(var(--radius) - 8px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
                '3xl': 'calc(var(--radius) + 16px)',
                '4xl': 'calc(var(--radius) + 24px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
                glow: '0 4px 24px -4px rgba(37, 99, 235, 0.25), 0 2px 12px -2px rgba(16, 185, 129, 0.15)',
                'glow-green': '0 4px 24px -4px rgba(16, 185, 129, 0.30)',
                pastel: '0 4px 20px -2px rgba(37, 99, 235, 0.12), 0 2px 10px -2px rgba(16, 185, 129, 0.08)'
            },
            fontFamily: {
                sans: [
                    'Nunito',
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'sans-serif'
                ],
                display: [
                    'Poppins',
                    'Nunito',
                    'system-ui',
                    'sans-serif'
                ]
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'bounce-gentle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'wiggle': {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                },
                'spin-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
                'wiggle': 'wiggle 0.5s ease-in-out',
                'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
                'spin-slow': 'spin-slow 8s linear infinite'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
