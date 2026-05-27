/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/haclab-horizon-garage-yyc',
  assetPrefix: '/haclab-horizon-garage-yyc',
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
