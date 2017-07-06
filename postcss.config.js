module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('postcss-font-smoothing')(),
    require('postcss-smart-import')(),
    require('precss')(),
    require('autoprefixer')()
  ]
}
