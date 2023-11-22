/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-plugin-svgr");

const nextConfig = {};

module.exports = withPlugins(
  [
    [
      withSvgr({
        svgrOptions: {
          titleProp: true,
          icon: true,
          svgProps: {
            height: "auto",
          },
        },
      }),
    ],
  ],
  nextConfig,
);
