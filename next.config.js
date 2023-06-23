/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/shared/utils/imagesLoader.ts",
  },
};

module.exports = nextConfig;
