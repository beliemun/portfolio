module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-second': "#8E2DE2",
        'custom-primary': '#4A00E0',
        'custom-main': '#282D32',
        'custom-shadow': '#E5E7EB',
        'custom-disable': '#B7C0CF',
        'custom-error': '#ee5253',
      }
    },
    screens: {
      '2xs': '360px',
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
    },
  },
  plugins: [],
}
