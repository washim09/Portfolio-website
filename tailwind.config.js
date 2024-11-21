module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    options: {
      safelist: []
    }
  },
  theme: {
    extend: {
      animation: {
        'noise': 'noise 1s steps(8,end) infinite both',
      },
      opacity: {
        '35': '0.35',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html, body': { 
          margin: '0',
          padding: '0',
          width: '100%',
          maxWidth: '100%',
          overflowX: 'hidden',
        },
      })
    },
  ],
}