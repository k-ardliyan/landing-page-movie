/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./dist/**/*.{html,js}', './src/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'],
    },
};
