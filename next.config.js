const withPlugins = require('next-compose-plugins');
const OptimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

const customConfig = {
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    );
    return config;
  },
};

module.exports = withPlugins([
  [withVideos],
  [OptimizedImages, { optimizeImages: false }],
], customConfig);
