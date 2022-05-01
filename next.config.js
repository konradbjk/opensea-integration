module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  webpack: (config, {}) => {
      config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false
      };
      return config;
  }
};