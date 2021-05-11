const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ['./static/index.html', './src/**/*.vue'],
    defaultExtractor: content => content.match(/[\w-./:]+(?<!:)/g) || []
  })
  ],
};