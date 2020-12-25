const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const OptimizedImages = require('next-optimized-images');
const withSourceMaps = require( '@zeit/next-source-maps' );
const withOffline = require('next-offline');
const withVideos = require('next-videos')

const customConfig = {
    devIndicators: { autoPrerender: false },

    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config

    },

    generateInDevMode: false,
    workboxOpts: {
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5000000,
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10,
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
        ],
    },

    env: {
        domain: 'http://95.217.217.203/junior',
    }

};

module.exports = withPlugins([
    [withSourceMaps],
    [withOffline],
    [css],
    [withVideos],
    [OptimizedImages],
], customConfig);
