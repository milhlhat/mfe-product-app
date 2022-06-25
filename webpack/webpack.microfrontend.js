const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");
const appVersion = packageJson.version;

module.exports = ({ serve }) => {
  return {
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
      runtimeChunk: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "ProductApp",
        filename: "remoteEntry.js",
        remotes: {
          OrderApp: "OrderApp@http://localhost:3061/remoteEntry.js",
          ShellApp : "ShellApp@http://localhost:3060/remoteEntry.js",
        },
        exposes: {
         "./ProductDetail": "./src/ProductDetail.tsx",
        },
        shared: {
          ...Object.fromEntries(
            Object.entries(packageJson.dependencies).map(([module]) => [
              module,
              { singleton: true, shareScope: "default" },
            ])
          ),

          Footer: {
            singleton: true,
            import: "src/Footer.tsx",
            requiredVersion: appVersion,
          },
          Layout: {
            singleton: true,
            import: "src/Layout.tsx",
            requiredVersion: appVersion,
          },
          useStore: {
            singleton: true,
            import: "src/useStore.ts",
            requiredVersion: appVersion,
          },
        },
      }),
    ],
    output: {
      publicPath: "auto",
    },
  };
};
