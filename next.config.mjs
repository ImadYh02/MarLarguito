/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add file-loader rule for mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
