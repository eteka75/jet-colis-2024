import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import withPWA from 'next-pwa';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
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
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'font-awesome',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /\/_next\/image\?url=.+$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'next-image',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },
      {
        urlPattern:
          /\.(?:png|jpg|jpeg|svg|gif|webp|ico|bmp|tiff|mp3|wav|flac|ogg|mp4|webm|ogv|ogg|opus|avi|mkv|mov)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-assets',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
          },
        },
      },
    ],
  })(nextConfig)
);
