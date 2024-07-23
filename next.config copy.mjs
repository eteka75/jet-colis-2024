/** @type {import('next').NextConfig} */
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'api.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Ajouter la règle existante pour ignorer les fichiers HTML
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      use: {
        loader: 'ignore-loader',
      },
    });

    // Ajouter le plugin mini-css-extract-plugin seulement si nécessaire
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: dev ? '[name].css' : '[name].[contenthash].css',
          chunkFilename: dev ? '[id].css' : '[id].[contenthash].css',
        })
      );
    }

    // Ajouter la configuration d'alias de chemin
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'components');

    // Ajouter la mise en cache de Webpack
    config.cache = {
      type: 'filesystem',
    };

    // Optimisation de splitChunks
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        framework: {
          chunks: 'all',
          name: 'framework',
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
        },
      };
    }

    return config;
  },
  swcMinify: true, // Activer la minification SWC

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(withBundleAnalyzer(nextConfig));
