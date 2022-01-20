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
    async redirects() {
        return [
            {
                source: '/hall-of-fame',
                destination: '/stats',
                permanent: true,
            },
            {
                source: '/rankings',
                destination: '/stats',
                permanent: false,
            },
            {
                source: '/rankings',
                destination: '/stats',
                permanent: false,
            }
        ]
    },
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        const posts = require('./src/data/posts');
        const writeups = require('./src/data/writeups');
        return {
            "/": { page: "/" },
            "/blog": { page: "/blog" },
            "/about": { page: "/about" },
            "/stats": { page: "/stats" },
            "/faq": { page: "/faq" },
            "/rules": { page: "/rules" },
            "/branding": { page: "/branding" },
            "/promote": { page: "/promote" },
            "/publicize": { page: "/publicize" },
            "/ssi": { page: "/ssi" },
            "/start": { page: "/start" },
            "/resources": { page: "/resources" },
            "/trainings": { page: "/trainings" },
            "/advisory-board": { page: "/advisory-board" },
            "/discord": { page: "/discord" },
            "/join": { page: "/join" },
            "/join1": { page: "/join1" },
            "/join2": { page: "/join2" },
            "/privacy": { page: "/privacy" },
            "/sponsors": { page: "/sponsors" },
            "/organizers": { page: "/organizers" },
            "/championship": { page: "/championship" },
            "/talent-incubation": { page: "/talent-incubation" },
            ...writeups,
            ...posts
        }
    },
    env: {
        domain: 'https://play.inctf.in/junior',
    }

};

module.exports = withPlugins([
    [withVideos],
    [OptimizedImages],
], customConfig);
