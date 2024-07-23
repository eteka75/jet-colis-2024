import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import withPWA from 'next-pwa';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'api.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Ignorer les fichiers HTML
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      use: 'ignore-loader',
    });

    // Ajouter le plugin mini-css-extract-plugin si nécessaire
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

    return config;
  },
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

export default withNextIntl(
  withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Désactive PWA en développement
    // Ajouter d'autres options de configuration PWA ici si nécessaire
  })(nextConfig)
);
