import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  /* config options here */
  //  typescript: {
  //   // 👇 Skip type errors during build
  //   ignoreBuildErrors: true,
  // },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
// export default nextConfig;
