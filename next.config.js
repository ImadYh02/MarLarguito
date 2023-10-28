/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

// webpack.config.js

module.exports = {
    webpack: (config, {dev, isServer}) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '../bg_diving.mp4',
                },
              },
            ],
        });
        return config;      
    },
} 