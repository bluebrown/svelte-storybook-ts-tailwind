module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  experimental: "all",
  purge: [
    'src/**/*.svelte',
    'src/**/*.ts',
    'src/**/*.js',
    'public/index.html',
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
