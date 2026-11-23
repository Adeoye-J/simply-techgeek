/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                // Theme colours are CSS variables (see index.css), so light/dark mode works automatically.
                ink: 'rgb(var(--ink) / <alpha-value>)',
                'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
                paper: 'rgb(var(--paper) / <alpha-value>)',
                panel: 'rgb(var(--panel) / <alpha-value>)',
                dim: 'rgb(var(--dim) / <alpha-value>)',
                line: 'rgb(var(--line) / <alpha-value>)',
                // Accent colours are fixed across themes.
                c1: '#6D5DFC', // violet
                c2: '#22D3EE', // cyan
                c3: '#FF6B9A', // pink
                c4: '#FFB547', // amber
                c5: '#34D399', // mint
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
                body: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
            },
            backgroundImage: {
                grad: 'linear-gradient(120deg, #6D5DFC, #22D3EE 55%, #FF6B9A)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(30px, -20px) scale(1.08)' },
                },
                tilt: {
                    '0%, 100%': { transform: 'rotate(-1.5deg)' },
                    '50%': { transform: 'rotate(1.5deg)' },
                },
                bob: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scroll: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'spin-slow': {
                    to: { transform: 'rotate(360deg)' },
                },
                'pulse-ring': {
                    '0%': { boxShadow: '0 0 0 0 rgba(52, 211, 153, 0.6)' },
                    '70%': { boxShadow: '0 0 0 10px rgba(52, 211, 153, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(52, 211, 153, 0)' },
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'modal-in': {
                    from: { opacity: '0', transform: 'translateY(16px) scale(.98)' },
                    to: { opacity: '1', transform: 'none' },
                },
            },
            animation: {
                float: 'float 14s ease-in-out infinite',
                tilt: 'tilt 8s ease-in-out infinite',
                bob: 'bob 5s ease-in-out infinite',
                'bob-reverse': 'bob 6s ease-in-out infinite reverse',
                scroll: 'scroll 32s linear infinite',
                'spin-slow': 'spin-slow 18s linear infinite',
                'pulse-ring': 'pulse-ring 2s infinite',
                'fade-in': 'fade-in .2s ease-out',
                'modal-in': 'modal-in .3s cubic-bezier(.2,.7,.2,1)',
            },
        },
    },
    plugins: [],
};