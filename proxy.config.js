module.exports = {
  devServer: {
    proxy: {
      "/cryptocurrency": {
        target: "https://sandbox-api.coinmarketcap.com/v1",
        changeOrigin: true,
      },
    },
  },
};
