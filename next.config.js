require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  distDir: '_next',
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty',
      };
    }

    return config;
  },
});
