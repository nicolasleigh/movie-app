/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#09090b',
                secondary: '#27272a',
                'light-gray': '#4b5563',
                'dark-gray': '#1f2937',
            },
            backgroundImage: {
                'home-background': "url('/dark-background.jpeg')",
                // 'section-background': "url('/dark-wallpaper.png')"
            },
        },
    },
    plugins: [require('flowbite/plugin')],
    // corePlugins: {
    //     preflight: false,
    // },
    darkMode: 'class',
};
