/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "neon-blue": "#00d2ff",
                "neon-purple": "#9d50bb",
                "neon-green": "#2ecc71",
                "neon-pink": "#e01cd5",
                "premium-gold": "#b8860b",
                "premium-silver": "#8e8e8e",
                pitch: "#000000",
                dark: "#050505",
                "dark-elevated": "#0a0a0a",
                primary: "#2563eb",
                secondary: "#10b981",
                accent: "#7c3aed",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'glow-pulse 4s infinite ease-in-out',
                'float': 'float 6s infinite ease-in-out',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'neon-pulse': 'neon-pulse 3s infinite alternate',
                'scan': 'scan 4s linear infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)' },
                    '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'reveal': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'neon-pulse': {
                    '0%': { boxShadow: '0 0 5px #00d2ff' },
                    '100%': { boxShadow: '0 0 15px #00d2ff' },
                },
                'scan': {
                    '0%': { transform: 'translateY(-100%)' },
                    '50%': { transform: 'translateY(400%)' },
                    '100%': { transform: 'translateY(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
