module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
				inter: ['inter', 'serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 20s ease infinite', // Slowed down to 20s
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
