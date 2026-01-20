const withPlugins = require('next-compose-plugins');
const OptimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

const customConfig = {

    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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
