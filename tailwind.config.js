/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './dist/**/*.{html,js}',
        './src/**/*.{html,js}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};
