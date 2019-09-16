require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withCSS(
  withMDX({
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

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      if (!isServer) {
        config.node = {
          fs: 'empty',
          module: 'empty',
        };
      }

      return config;
    },
  }),
);
