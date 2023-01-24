const { defineConfig } = require("@vue/cli-service");
const proxyConfig = require("./proxy.config");

module.exports = defineConfig({
  // ...proxyConfig,
  transpileDependencies: true,
});
