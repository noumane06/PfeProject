/*module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};*/
// next.config.js
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    REACT_APP_MAP_KEY :  process.env.REACT_APP_MAP_KEY
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
}); 