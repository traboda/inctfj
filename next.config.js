const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const OptimizedImages = require('next-optimized-images');
const withSourceMaps = require( '@zeit/next-source-maps' );
const withOffline = require('next-offline');
const withVideos = require('next-videos')

const customConfig = {
    devIndicators: { autoPrerender: false },
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
    async redirects() {
        return [
            {
                source: '/hall-of-fame',
                destination: '/stats',
                permanent: true,
            },

        ]
    },
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        const posts = require('./src/data/posts');
        return {
            "/": { page: "/" },
            "/blog": { page: "/blog" },
            "/about": { page: "/about" },
            "/stats": { page: "/stats" },
            "/faq": { page: "/faq" },
            "/rules": { page: "/rules" },
            "/branding": { page: "/branding" },
            ...posts
        }
    },
    env: {
        domain: 'https://play.inctf.in/junior',
    }

};

module.exports = withPlugins([
    [withSourceMaps],
    [withOffline],
    [css],
    [withVideos],
    [OptimizedImages],
], customConfig);
