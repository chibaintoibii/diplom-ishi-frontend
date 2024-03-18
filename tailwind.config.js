/** @type {import('tailwindcss').Config} */
const {createThemes} = require('tw-colors');
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
    theme: {
        extend: {
            boxShadow: {
                'navbar': '-5px 0 15px -10px #424242FF',
                'sidebarMenuItemTop': '4px 4px 0 4px #E5E7EB',
                'sidebarMenuItemBottom': '4px -4px 0 4px #E5E7EB',
                'sidebarMenuItemTopDark': '4px 4px 0 4px #101010',
                'sidebarMenuItemBottomDark': '4px -4px 0 4px #101010'
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
                // 'primary': '#141B2D',
                'primary-darker': '#1E293B',
                'primary': {
                    '1': '#141B2D',
                    '2': '#0e1321',
                    '3': '#222c3d',
                    '4': '#28354a'
                },
                dark: {
                    '800': '#000000',
                    '700': '#101010',
                    '600': '#111111',
                    '500': '#1F1F1F',
                    '400': '#3E3C3E',
                    '300': '#25394a',
                    '200': '#28354A',
                    '100': '#304059',
                    '1': '#0f3c4c',
                    '3': '#071e26'
                }
            },
            animation: {
                rotate: 'rotation 1s linear infinite'
            }
        },

    },
    darkMode: 'class',
    plugins: [
        createThemes({
            halloween: {
                'primary': 'orange',
                'secondary': 'yellow',
            },
            summer: {
                'primary': 'pink',
                'secondary': 'red',
            },
            winter: {
                'primary': 'blue',
                'secondary': 'green',
            },
            party: {
                'primary': 'steelblue',
                'secondary': 'darkblue',
            },
        })
    ],
}

