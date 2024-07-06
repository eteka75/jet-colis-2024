/** @type {import('next').NextConfig} */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'api.unsplash.com'],
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

    return config;
  },
};

export default nextConfig;
