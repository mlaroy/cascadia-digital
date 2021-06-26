// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.js", "./src/**/*.md"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'transparent': 'transparent',
      'jp-indigo': '#223843',
      'cream':  '#C8F0FF',
      'light-blue':  '#53ABCF',
      'lighter-blue':  '#67D6FF',
      'greyish-blue':  '#637780',

      'black': '#22292f',
      'grey-darkest': '#3d4852',
      'grey-darker': '#606f7b',
      'grey-dark': '#8795a1',
      'grey': '#b8c2cc',
      'grey-light': '#dae1e7',
      'grey-lighter': '#f1f5f8',
      'grey-lightest': '#f8fafc',
      'white': '#ffffff',
    },

    fontFamily: {
      'red-hat': [
        'Red Hat Text',
        'Helvetica Neue',
        'Futura',
        'sans-serif',
        'system-ui',
      ],
      'dm-serif': [
        'DM Serif Text',
        'Garamond',
        'Georgia',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ]
    },
    // fonts: {
    //   'sans': [
    //     'Red Hat Text',
    //     'Helvetica Neue',
    //     'Futura',
    //     'system-ui',
    //     'BlinkMacSystemFont',
    //     '-apple-system',
    //     'Segoe UI',
    //     'Roboto',
    //     'Oxygen',
    //     'Ubuntu',
    //     'Cantarell',
    //     'Fira Sans',
    //     'Droid Sans'

    //   ],
    //   'serif': [
    //     'DM Serif Text',
    //     'Garamond',
    //     'Georgia',
    //     'Constantia',
    //     'Lucida Bright',
    //     'Lucidabright',
    //     'Lucida Serif',
    //     'Lucida',
    //     'DejaVu Serif',
    //     'Bitstream Vera Serif',
    //     'Liberation Serif',
    //     'serif'
    //   ],
    //   'mono': [
    //     'Menlo',
    //     'Monaco',
    //     'Consolas',
    //     'Liberation Mono',
    //     'Courier New',
    //     'monospace',
    //   ]
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
