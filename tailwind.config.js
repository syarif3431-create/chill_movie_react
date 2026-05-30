/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'chill-dark': '#181A1C',
                'chill-card': 'rgba(24, 26, 28, 0.84)', 
                'chill-button': '#2F3334',
                'chill-border': '#E7E3E3',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
            },

            // animasi validasi merah login 
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-5px)' },
                    '75%': { transform: 'translateX(5px)' },
                },
            },
            animation: {
                shake: 'shake 0.3s ease-in-out',
            },
        },
    },
    plugins: [],
}