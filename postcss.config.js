const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0
    }),
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  ]
})
