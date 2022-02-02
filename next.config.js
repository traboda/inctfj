const withPlugins = require('next-compose-plugins');
const OptimizedImages = require('next-optimized-images');
const withVideos = require('next-videos')

const customConfig = {
    devIndicators: { autoPrerender: false },
    webpack5: false,
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push(
            {
                test: /\.ya?ml$/,
                use: 'js-yaml-loader',
            },
        )
        return config
    },
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
        NEXT_PUBLIC_EVENT_ID: 'inctfj',
        EVENT_ID: 'inctfj',
    }

};

module.exports = withPlugins([
    [withVideos],
    [OptimizedImages, { optimizeImages: false }],
], customConfig);
