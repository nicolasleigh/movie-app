/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                pri: '#09090b',
                sec: '#27272a',
                'light-gray': '#4b5563',
                'dark-gray': '#1f2937',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
