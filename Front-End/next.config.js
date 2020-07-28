/*module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};*/
// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  devIndicators: {
    autoPrerender: false,
  },
}); 