/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'https://api.unsplash.com'],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      exclude: /node_modules/,
      use: {
        loader: 'ignore-loader',
      },
    });

    return config;
  },
};

export default nextConfig;
