module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  basePath: "/ERC-website-2021",
  assetPrefix: "/ERC-website-2021"
}
